import Link from "next/link";
const ContactIntro = () => {
  return (
    <div className="text-left max-w-3xl px-2 md:px-10 md:mx-auto">
      <div className="leading-[1.5] md:leading-[1.5] text-lg flex flex-col gap-y-4">
        <h1 className="font-bold">Hey there 👋,</h1>
        <p>
          If you have any questions or want to get in touch with me, my inbox is
          always open. I would love to have a conversation.
        </p>

        <ul className="list-disc space-y-1 px-12">
          <li>
            If you are looking for my socials ✈️{" "}
            <Link
              className="underline underline-offset-2 mr-2 text-blue-500"
              href="https://www.linkedin.com/in/ronythankachan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn,
            </Link>
            <Link
              className="underline underline-offset-2 mr-2 text-blue-500"
              href="https://www.instagram.com/iampurplish/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram,
            </Link>
            <Link
              className="underline underline-offset-2 mr-2 text-blue-500"
              href="https://www.github.com/ronythankachan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </li>
          <li>
            My email 👉{" "}
            <Link
              className="underline underline-offset-2 mr-2"
              href="mailto:rony@ronythankachan.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              rony@ronythankachan.com
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactIntro;
