import Image3 from "../assets/img/feature-3-img.png";
import { featuresSection3 } from "../data";

const FeaturesSection3 = () => {
  const { title, subtitle, cta } = featuresSection3;
  return (
    <section className="py-[30px] lg:py-[120px]">
      <div className="flex flex-col lg:flex-row">
        {/* text */}
        <div className="max-w-[454px] mb-6 lg:mt-10">
          <h3 className="h3 mb-6">{title} </h3>
          <p className="text-gray mb-8 max-w-[408px]">{subtitle} </p>
          <button className="btn px-8">{cta} </button>
        </div>

        {/* image */}
        <div className="flex-1 flex justify-end">
          <img src={Image3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection3;
