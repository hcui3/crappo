import { IoIosArrowDroprightCircle } from "react-icons/io";

import Image from "../assets/img/hero-img.png";
import { hero } from "../data";
import Badge from "./Badge";

const Hero = () => {
  const { title, subtitle, cta } = hero;

  return (
    <section className="pt-36">
      <div className="container flex flex-col items-center lg:flex-row">
        {/* text */}
        <div className="flex-1">
          <Badge />

          <h1 className="h1 mb-6">{title}</h1>
          <p className="sh1 mb-8">{subtitle}</p>

          <button className="btn px-4 pl-5 gap-4 text-sm lg:text-base">
            {cta}
            <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
          </button>
        </div>

        {/* image */}
        <div>
          <img src={Image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
