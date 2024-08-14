import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  const contact = [
    { icon: "icon-phone.svg", text: "+20121212121" },
    { icon: "icon-email.svg", text: "example@fylo.com" },
  ];
  const links = [
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ];
  const socialIcons = [
    { icon: faFacebookF, url: "https://facebook.com" },
    { icon: faTwitter, url: "https://twitter.com" },
    { icon: faInstagram, url: "https://instagram.com" },
  ];
  return (
    <footer className="bg-darkerColor pt-[202px] text-white pb-16">
      <div className="container ">
        {/* Logo */}
        <img
          src="./assets/images/logo.svg"
          alt="Fylo Logo"
          className="w-[175px] h-[66px] object-contain mb-4"
        />
        <div className="px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex gap-[15px] ">
            <img
              src="./assets/images/icon-location.svg"
              alt="location-img"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="text-sm tracking-[0.8px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div>
            {contact.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-[15px] mb-[15px]"
              >
                <img
                  src={`./assets/images/${item.icon}`}
                  alt="icon"
                  className="w-[18px] h-[18px] object-contain"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Links */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {links.map((link) => (
              <li key={link} className="hover:underline">
                <a
                  href={link.toLowerCase().replace(/\s+/g, "-")}
                  className=" hover:text-btnColor transition-all duration-200 text-base"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="center-flex md:items-start gap-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] center-flex border border-white rounded-[50%] hover:text-btnColor hover:border-btnColor transition-all duration-200">
                  <FontAwesomeIcon icon={social.icon} className="social-icon" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
