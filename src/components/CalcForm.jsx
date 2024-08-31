import { calcForm } from "../data";

const CalcForm = () => {
  const { title, subtitle, cta, revenue, revenueInUSD, options } = calcForm;

  return (
    <div className="bg-form p-12 shadow-primary">
      <form className="flex flex-col space-y-12 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
        <input
          className="input text-lg text-darkblue placeholder:text-darkblue"
          type="text"
          placeholder="Enter your hash rate"
        />

        <select className="select">
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button className="btn text-white flex self-start">{cta}</button>
      </form>

      <div className="mt-24">
        <div className="text-blue font-medium mb-4">{title}</div>
        <div className="text-3xl font-bold mb-3">
          {revenue} <span>{revenueInUSD}</span>
        </div>
        <div className="text-gray-500 font-light">{subtitle}</div>
      </div>
    </div>
  );
};

export default CalcForm;
