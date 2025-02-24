import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://linkedin.com/in/ronythankachan",
      label: "IN",
      icon: "/linkedin.png",
    },
    {
      href: "https://github.com/ronythankachan",
      label: "TT",
      icon: "/github.png",
    },
    {
      href: "https://instagram.com/iampurplish",
      label: "IG",
      icon: "/instagram.png",
    },
    {
      href: "https://www.youtube.com/@rony.thankachan",
      label: "YT",
      icon: "/youtube.png",
    },
  ];

  const footerLinks = {
    More: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    Contents: [
      { label: "News Letter", href: "/newsletter" },
      { label: "Blogs", href: "/blogs" },
      {
        label: "Youtube Videos",
        href: "https://www.youtube.com/@rony.thankachan",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        label: "Leetcode",
        href: "https://www.leetcode.com/iamrony",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
    Projects: [
      {
        label: "Machine Learning & AI",
        href: "https://github.com/ronythankachan/fraud_detection",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        label: "Small commerce",
        href: "https://github.com/ronythankachan/e-commerce-nextjs-client",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        label: "Hospital website",
        href: "https://drsreelekshmis.com",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  };

  const FooterLinksList = ({
    category,
    links,
  }: {
    category: string;
    links: Array<{
      label: string;
      href: string;
      target?: string;
      rel?: string;
    }>;
  }) => (
    <div className="font-serif">
      <h3 className="text-xl mb-4">{category}</h3>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-gray-600 underline underline-offset-4 hover:no-underline hover:text-black"
              target={link.target}
              rel={link.rel}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const SocialLinks = () => (
    <div className="flex gap-4 justify-center lg:justify-start mt-3">
      {socialLinks.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          className="p-3 flex items-center justify-center rounded-full bg-grayBackground"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={social.icon} alt={social.label} width={24} height={24} />
        </Link>
      ))}
    </div>
  );

  const renderFooterContent = (isMobile: boolean) => (
    <div
      className={`flex flex-col font-serif ${
        isMobile ? "items-center text-center" : "lg:flex-row lg:justify-around"
      }`}
    >
      <div className="flex flex-col items-center lg:items-start gap-2 mb-4 lg:mb-0 mt-20">
        <Link href="/" className="logo text-4xl">
          Rony Thankachan
        </Link>
        <p className="text-gray-600">
          © Rony Thankachan {currentYear}. All rights reserved.
        </p>
        <SocialLinks />
      </div>
      <div
        className={`grid ${
          isMobile ? "space-y-16 mt-16" : "grid-cols-3 gap-32 mt-16 mb-16"
        }`}
      >
        {Object.entries(footerLinks).map(([category, links]) => (
          <FooterLinksList key={category} category={category} links={links} />
        ))}
      </div>
    </div>
  );

  return (
    <footer className="max-w-7xl mx-auto px-4 py-20 mt-10">
      <hr className="border-t border-gray-300 mb-8" />
      {/* Desktop view */}
      <div className="hidden lg:block">{renderFooterContent(false)}</div>

      {/* Tablet view */}
      <div className="hidden md:block lg:hidden">
        {renderFooterContent(false)}
      </div>

      {/* Mobile view */}
      <div className="md:hidden">{renderFooterContent(true)}</div>
    </footer>
  );
};

export default Footer;
