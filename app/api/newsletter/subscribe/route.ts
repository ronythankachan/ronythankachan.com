import { NextResponse } from 'next/server';
import { isValidEmail } from '../../../utils/validationUtils';

const createErrorResponse = (message: string, status: number) => {
  return NextResponse.json({ error: message }, { status });
}

interface Group {
  id: string;
  name: string;
}

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return createErrorResponse("Email is required", 400);
  }

  if (!isValidEmail(email)) {
    return createErrorResponse("Invalid email format", 400);
  }

  try {
    // Fetch the group ID
    const groupResponse = await fetch('https://connect.mailerlite.com/api/groups', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
      },
    });

    if (!groupResponse.ok) {
      const errorData = await groupResponse.json();
      console.error('Group API Error:', errorData); // Log the actual error
      return createErrorResponse('Subscription failed', 500);
    }

    const groupData = await groupResponse.json();
    const group = groupData.data.find((g: Group) => g.name === "Newsletter");

    if (!group) {
      console.error('Group not found for Newsletter');
      return createErrorResponse('Subscription failed', 500);
    }

    const groupId = group.id;

    // Subscribe the email to the group
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email: email,
        groups: [groupId]
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Subscription API Error:', errorData); // Log the actual error
      return createErrorResponse('Subscription failed', 500);
    }

    return NextResponse.json({ message: `Thank you for subscribing` });
  } catch (error) {
    console.error('Unexpected Error:', error); // Log unexpected errors
    return createErrorResponse('Subscription failed', 500);
  }
}