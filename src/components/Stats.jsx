import { statsData } from "../data";

const Stats = () => {
  return (
    <section className="pt-24">
      <div className="container flex flex-col gap-y-6 lg:flex-row lg:justify-between">
        {statsData.map((stat, index) => {
          const { icon: Icon, number, title } = stat;

          return (
            <div className="flex items-center gap-x-6" key={index}>
              {/* icon */}
              <div className="icon-stats">
                <Icon />
              </div>

              {/* text */}
              <div>
                <div className="text-2xl font-bold lg:text-[40px] lg:mb-2">{number}</div>
                <div className="text-gray">{title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
