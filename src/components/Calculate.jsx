import { calculate } from "../data";
import CalcForm from "./CalcForm";

const Calculate = () => {
  const { title, subtitle } = calculate;

  return (
    <section className="section">
      <div className="container">
        {/* text */}
        <div className="text-center">
          <h2 className="h2">{title}</h2>
          <p className="text-gray text-lg max-w-[622px] mx-auto mt-6 mb-16">{subtitle}</p>
        </div>

        {/* form */}
        <CalcForm />
      </div>
    </section>
  );
};

export default Calculate;
