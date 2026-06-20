// Footer.jsx
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#EDEDED] pt-12">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1.4fr] gap-8">
          {/* Brand */}
          <div>
            <h2 className="font-main text-2xl font-semibold text-gray-900">
              StayVista
            </h2>

            <p className="font-main text-sm text-gray-500 mt-3 leading-relaxed">
              Experience the perfect blend of luxury, comfort and hospitality.
              We make every moment memorable.
            </p>

            <div className="flex gap-3 mt-5">
              {[
                { icon: <FaFacebook />, label: "Facebook" },
                { icon: <FaTwitter />, label: "Twitter" },
                { icon: <FaInstagram />, label: "Instagram" },
                { icon: <FaYoutube />, label: "YouTube" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm hover:bg-gray-600 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-main text-sm font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {[
                "Home",
                "Rooms",
                "Offers",
                "Destinations",
                "Blog",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-main text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-main text-sm font-semibold text-gray-900 mb-4">
              Support
            </h3>

            <ul className="space-y-2">
              {[
                "FAQ",
                "Privacy Policy",
                "Terms & Conditions",
                "Cancellation Policy",
                "Sitemap",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-main text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-main text-sm font-semibold text-gray-900 mb-4">
              Contact Us
            </h3>

            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-gray-500">
                <FaPhone className="mt-0.5 text-gray-700 shrink-0" />
                <span className="font-main">+60 123 456 789</span>
              </div>

              <div className="flex items-start gap-2 text-sm text-gray-500">
                <FaEnvelope className="mt-0.5 text-gray-700 shrink-0" />
                <span className="font-main">info@stayvista.com</span>
              </div>

              <div className="flex items-start gap-2 text-sm text-gray-500">
                <FaLocationDot className="mt-0.5 text-gray-700 shrink-0" />
                <span className="font-main">
                  123 Ocean Drive, Miami, FL 33101, USA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 py-4">
          <p className="font-main text-xs text-gray-400 text-center md:text-left">
            © 2024 StayVista. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;