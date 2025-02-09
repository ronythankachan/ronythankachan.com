import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://youtube.com", label: "YT" },
    { href: "https://instagram.com", label: "IG" },
    { href: "https://linkedin.com", label: "IN" },
    { href: "https://tiktok.com", label: "TT" },
    { href: "https://twitter.com", label: "X" },
    { href: "https://facebook.com", label: "FB" },
  ];

  const footerLinks = {
    More: [
      { label: "About", href: "/about" },
      { label: "Jobs", href: "/jobs" },
      { label: "Contact", href: "/contact" },
      { label: "My Account", href: "/account" },
    ],
    "Free Content": [
      { label: "Newsletter", href: "/newsletter" },
      { label: "Articles & Guides", href: "/articles" },
      { label: "Podcast", href: "/podcast" },
      { label: "Videos", href: "/videos" },
      { label: "Book Notes", href: "/books" },
    ],
    Products: [
      { label: "My Book", href: "/book" },
      { label: "Productivity Lab", href: "/lab" },
      { label: "YouTuber Academy", href: "/academy" },
    ],
  };

  return (
    <footer className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col items-start mb-16">
        <div className="text-2xl font-bold mb-4">Rony Thankachan</div>
        <p className="text-gray-500">
          © {currentYear} Rony Thankachan. All rights reserved.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-20 mb-16">
        <div className="col-span-1">
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="col-span-1">
            <h3 className="font-medium text-base mb-6">{category}</h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-8">
        <div className="flex items-center space-x-2">
          <span>Powered by Rockbase</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/privacy" className="hover:text-gray-800">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/cookies" className="hover:text-gray-800">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
