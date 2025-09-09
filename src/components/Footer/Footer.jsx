import { Container } from "../Layout/Container";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  // Footer sections with links
  const sections = [
    {
      title: "Quick Links",
      links: [
        "Customer Reviews",
        "Our Blogs",
        "Store Locator",
        "Jewellery Care",
        "Join Us",
      ],
    },
    {
      title: "Customer Service",
      links: [
        "Shipping & Returns",
        "Privacy Policy",
        "International Shipping",
        "FAQ's and Support",
        "Terms of Service",
      ],
    },
    {
      title: "Categories",
      links: ["Necklaces", "Earrings", "Rings", "Bracelets", "Anklets"],
    },
  ];

  // Social media icons with links
  const socialMedia = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">ELEGANT JEWELS</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Discover exquisite jewelry crafted with precision and passion. 
                From timeless classics to contemporary designs, we bring you 
                the finest collection of jewelry.
              </p>
              <div className="flex space-x-4">
                {socialMedia.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-gray-800 hover:bg-rose-500 rounded-lg transition-colors duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Link Sections */}
            {sections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-lg font-semibold">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Us</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div className="text-gray-300">
                    <p>SF-11, Ansal Fortune Arcade</p>
                    <p>K Block, K-27, Sector 18</p>
                    <p>Noida, Uttar Pradesh 201301</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-rose-500" />
                  <a
                    href="mailto:contact@elegantjewels.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    contact@elegantjewels.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-rose-500" />
                  <a
                    href="tel:+15551234567"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Elegant Jewels. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
