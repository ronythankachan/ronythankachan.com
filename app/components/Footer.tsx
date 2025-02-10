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
      {/* Desktop view - hidden on tablet */}
      <div className="hidden lg:block">
        <div className="flex flex-col">
          <div className="grid grid-cols-4 gap-32">
            <div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-[#5dccf1] text-4xl font-serif">RT</div>
                </div>
                <small className="text-gray-600 mb-8">
                  © Rony Thankachan {currentYear}. All rights reserved.
                </small>
              </div>

              <div className="flex gap-4">
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
            </div>

            <div>
              <h3 className="text-2xl mb-8">More</h3>
              <ul className="space-y-4">
                {footerLinks.More.map((link) => (
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
            <div>
              <h3 className="text-2xl mb-8">Free Content</h3>
              <ul className="space-y-4">
                {footerLinks["Free Content"].map((link) => (
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
            <div>
              <h3 className="text-2xl mb-8">Products</h3>
              <ul className="space-y-4">
                {footerLinks.Products.map((link) => (
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
          </div>

          <div className="flex justify-end items-center mt-16 space-x-4 text-gray-600">
            <Link href="/privacy" className="hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <span>/</span>
            <Link href="/cookies" className="hover:underline underline-offset-4">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Tablet view */}
      <div className="hidden md:block lg:hidden">
        <div className="flex flex-col items-center">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-[#5dccf1] text-4xl font-serif">RT</div>
            </div>
            <p className="text-gray-600">
              © Rony Thankachan {currentYear}. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-16">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-[#f8f6f3]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-700">{social.label}</span>
              </Link>
            ))}
          </div>

          {/* Footer Links - 3 columns */}
          <div className="grid grid-cols-3 gap-32 text-center">
            <div>
              <h3 className="text-2xl mb-8">More</h3>
              <ul className="space-y-4">
                {footerLinks.More.map((link) => (
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
            <div>
              <h3 className="text-2xl mb-8">Free Content</h3>
              <ul className="space-y-4">
                {footerLinks["Free Content"].map((link) => (
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
            <div>
              <h3 className="text-2xl mb-8">Products</h3>
              <ul className="space-y-4">
                {footerLinks.Products.map((link) => (
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
          </div>

          {/* Bottom Links */}
          <div className="flex justify-center items-center mt-16 space-x-4 text-gray-600">
            <Link href="/privacy" className="hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <span>/</span>
            <Link href="/cookies" className="hover:underline underline-offset-4">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile view - hidden on tablet and desktop */}
      <div className="md:hidden">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="text-[#5dccf1] text-4xl font-serif">RT</div>
            <span className="text-3xl">Rony Thankachan</span>
          </div>
          <p className="text-gray-600">
            © Rony Thankachan {currentYear}. All rights reserved.
          </p>
        </div>

        <div className="md:hidden space-y-16 text-center">
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
