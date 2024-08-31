import { badge } from "../data";

const Badge = () => {
  const { title, subtitle } = badge;

  return (
    <div className="bg-white/10 rounded-full max-w-[330px] lg:max-w-[365px] p-1 pr-3 mb-6">
      <div className="flex items-center justify-between text-sm lg:text-base">
        <div className="bg-white text-darkblue rounded-full font-medium py-1 px-4">{title}</div>
        <div>{subtitle}</div>
      </div>
    </div>
  );
};

export default Badge;
