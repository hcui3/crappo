import Image from "../assets/img/why-img.png";
import { why } from "../data";

const Why = () => {
  const { title, subtitle, cta } = why;

  return (
    <section className="section">
      <div className="container flex flex-col-reverse items-center lg:flex-row gap-x-8">
        {/* image */}
        <div>
          <img src={Image} alt="" />
        </div>

        {/* text */}
        <div className="max-w-[480px]">
          <h2 className="h2">{title}</h2>
          <p className="sh2">{subtitle}</p>
          <button className="btn">{cta}</button>
        </div>
      </div>
    </section>
  );
};

export default Why;
