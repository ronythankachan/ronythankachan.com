import { NextResponse } from 'next/server';

export async function GET() {
  const newsletters = [
    { id: 1, title: "Newsletter 1", content: "Content for newsletter 1" },
    { id: 2, title: "Newsletter 2", content: "Content for newsletter 2" },
    { id: 3, title: "Newsletter 3", content: "Content for newsletter 3" },
  ];

  return NextResponse.json(newsletters);
}

