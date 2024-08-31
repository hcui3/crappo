import { IoLogoYoutube, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";
import Logo from "../assets/img/logo.svg";
import VisaImg from "../assets/img/visa.png";
import MastercardImg from "../assets/img/mastercard.png";
import BitcoinImg from "../assets/img/bitcoin.png";
import { linkData } from "../data";

const Footer = () => {
  return (
    <footer className="lg:pt-24 pt-0">
      <div className="container">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* logo */}
          <div className="flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]">
            <a href="#">
              <img src={Logo} alt="" />
            </a>
          </div>

          {/* group link */}
          <div className="flex-1 grid grid-cols-2">
            {linkData.map((item, index) => {
              const { title, links } = item;

              return (
                <div className="text-center w-full lg:text-left" key={index}>
                  <div className="text-xl font-medium mb-6">{title}</div>
                  <ul className="space-y-4 text-gray">
                    {links.map((link, index) => {
                      const { name, href } = link;

                      return (
                        <li key={index}>
                          <a className="hover:text-blue transition-all duration-300" href={href}>
                            {name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* payment */}
          <div className="flex flex-col flex-1">
            <div className="lg:ml-20">
              <h3 className="h3 font-medium mb-10 text-center lg:text-left">We accept following payment systems</h3>
              <div className="flex justify-center items-center gap-6">
                <img src={VisaImg} alt="" />
                <img src={MastercardImg} alt="" />
                <img src={BitcoinImg} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* copy & social */}
        <div className="py-16 mt-10 lg:mt-20 flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between">
          {/* copy text */}
          <div>&copy; 2022 CRAPPO. All rights reserved.</div>

          {/* social icons */}
          <div className="flex text-2xl gap-8">
            <a className="hover:text-blue transition" href="#">
              <IoLogoYoutube />
            </a>
            <a className="hover:text-blue transition" href="#">
              <IoLogoInstagram />
            </a>
            <a className="hover:text-blue transition" href="#">
              <IoLogoTwitter />
            </a>
            <a className="hover:text-blue transition" href="#">
              <IoLogoLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
