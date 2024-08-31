import Image1 from "../assets/img/feature-1-img.png";
import { featuresSection1 } from "../data";

const FeaturesSection1 = () => {
  const { title, subtitle, cta } = featuresSection1;

  return (
    <section className="pb-[30px] lg:pb-[120px]">
      <div className="flex flex-col lg:flex-row">
        {/* text */}
        <div className="max-w-[454px] mb-6 lg:mt-10">
          <h3 className="h3 mb-6">{title}</h3>
          <p className="text-gray mb-8">{subtitle}</p>
          <button className="btn">{cta}</button>
        </div>

        {/* image */}
        <div className="flex-1 flex justify-end">
          <img src={Image1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection1;
