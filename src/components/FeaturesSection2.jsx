import Image2 from "../assets/img/feature-2-img.png";
import { featuresSection2 } from "../data";

const FeaturesSection2 = () => {
  const { title, subtitle, cta } = featuresSection2;
  return (
    <section className="py-[30px] lg:py-[120px]">
      <div className="flex flex-col-reverse items-center lg:flex-row justify-end">
        {/* image */}
        <div className="flex-1 lg:absolute lg:left-0">
          <img src={Image2} alt="" />
        </div>

        {/* text */}
        <div className="flex-1 max-w-[456px]">
          <h3 className="h3 mb-6">{title}</h3>
          <p className="text-gray mb-8">{subtitle}</p>
          <button className="btn px-8 mb-6 lg:mb-0">{cta}</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection2;
