import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://www.youtube.com/@rony.thankachan", label: "YT", icon: "/youtube.png" },
    { href: "https://instagram.com/iampurplish", label: "IG", icon: "/instagram.png" },
    { href: "https://linkedin.com/in/ronythankachan", label: "IN", icon: "/linkedin.png" },
    { href: "https://github.com/ronythankachan", label: "TT", icon: "/github.png" }
  ];

  const footerLinks = {
    More: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ],
    "Contents": [
      { label: "News Letter", href: "/newsletter" },
      { label: "Blogs", href: "/articles" },
      { label: "Podcast", href: "/podcast" },
      { label: "Youtube Videos", href: "/videos" },
      { label: "Interview Preperation", href: "/videos" }
    ],
    Projects: [
      { label: "Machine Learning & AI", href: "/book" },
      { label: "Hospital Website", href: "www.drsreelekshmis.com" },
      { label: "System Design", href: "/lab" },
      { label: "Problem Solving", href: "https://www.leetcode.com/iamrony" },
    ],
  };

  const FooterLinksList = ({ category, links }: { category: string; links: Array<{ label: string; href: string }> }) => (
    <div>
      <h3 className="text-2xl mb-8">{category}</h3>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link 
              href={link.href}
              className="text-gray-600 hover:underline underline-offset-4"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const SocialLinks = () => (
    <div className="flex gap-4 justify-center mt-3">
      {socialLinks.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          className="p-3 flex items-center justify-center rounded-full bg-[#f8f6f3]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={social.icon}
            alt={social.label}
            width={24}
            height={24}
          />
        </Link>
      ))}
    </div>
  );

  const BottomLinks = ({ className = "" }) => (
    <div className={`flex items-center space-x-4 text-gray-600 ${className}`}>
      <Link href="/privacy" className="hover:underline underline-offset-4">
        Privacy Policy
      </Link>
      <span>/</span>
      <Link href="/cookies" className="hover:underline underline-offset-4">
        Cookie Policy
      </Link>
    </div>
  );

  return (
    <footer className="max-w-7xl mx-auto px-4 py-20">
      {/* Desktop view */}
      <div className="hidden lg:block">
        <div className="flex flex-col">
          <div className="grid grid-cols-4 gap-32">
            <div>
              <div className="flex flex-col mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-[#5dccf1] text-4xl font-serif">RT</div>
                </div>
                <small className="text-gray-600">
                  © Rony Thankachan {currentYear}. All rights reserved.
                </small>
                <div className="flex justify-start">
                  <SocialLinks />
                </div>
              </div>
            </div>
            
            {Object.entries(footerLinks).map(([category, links]) => (
              <FooterLinksList key={category} category={category} links={links} />
            ))}
          </div>
          <BottomLinks className="justify-end mt-16" />
        </div>
      </div>

      {/* Tablet view */}
      <div className="hidden md:block lg:hidden">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center text-center mb-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-[#5dccf1] text-4xl font-serif">RT</div>
            </div>
            <p className="text-gray-600">
              © Rony Thankachan {currentYear}. All rights reserved.
            </p>
            <SocialLinks />
          </div>

          <div className="grid grid-cols-3 gap-32 text-center mt-16 mb-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <FooterLinksList key={category} category={category} links={links} />
            ))}
          </div>

          <BottomLinks className="justify-center" />
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        <div className="flex flex-col items-center text-center mb-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="text-[#5dccf1] text-4xl font-serif">RT</div>
          </div>
          <p className="text-gray-600">
            © Rony Thankachan {currentYear}. All rights reserved.
          </p>
          <SocialLinks />
        </div>

        <div className="space-y-16 text-center mt-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-2xl mb-8">{category}</h3>
              <ul className="space-y-6">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 text-lg hover:underline underline-offset-4"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
