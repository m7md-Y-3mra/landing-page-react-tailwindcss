import { useEffect, useState } from "react";
const links = ["Features", "Team", "Signin"];

function Header() {
  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: "bg-transparent",
    padding: "pt-[60px]",
  });
  const handleScroll = () => {
    setNavbarStyle({
      backgroundColor:
        window.scrollY > 30 ? "bg-darkerColor" : "bg-transparent",
      padding: window.scrollY > 30 ? "py-[20px]" : "pt-[60px]",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${navbarStyle.backgroundColor} ${navbarStyle.padding}`}
    >
      <div className="container flex flex-col sm:flex-row gap-[30px] sm:gap-0 items-center justify-between">
        <a href="/">
          <img src="./assets/images/logo.svg" alt="logo-img"></img>
        </a>
        <nav>
          <ul className="flex items-center gap-10">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="text-white opacity-90 hover:opacity-100 hover:underline transition-opacity duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
