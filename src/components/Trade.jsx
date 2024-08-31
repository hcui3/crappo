import { useState } from "react";
import { trade } from "../data";
import { IoIosArrowForward } from "react-icons/io";

const Trade = () => {
  const { title, currency } = trade;
  const [itemName, setItemName] = useState("Bitcoin");

  return (
    <section className="section bg-trade text-darkblue lg:pt-72 lg:-mt-72">
      <div className="container">
        {/* title */}
        <h2 className="h2 text-center mb-16">{title}</h2>

        {/* items */}
        <div className="flex flex-col gap-11 lg:flex-row">
          {currency.map((item, index) => {
            const { image, name, abbr, description } = item;

            return (
              <div
                className={`bg-card transition-all duration-300 ${
                  name === itemName ? "bg-violet text-white" : "bg-white"
                }`}
                key={index}
                onClick={() => setItemName(name)}
              >
                <div className="flex flex-col justify-center items-center">
                  {/* item image */}
                  <img className="mb-12" src={image} alt="" />

                  {/* item name */}
                  <div className="mb-4 flex items-center gap-2">
                    <div className="text-3xl font-bold">{name}</div>
                    <div className="text-lg text-gray-400 font-medium">{abbr}</div>
                  </div>

                  {/* item description */}
                  <p className="mb-6 text-center">{description}</p>

                  {/* btn */}
                  <button
                    className={`btn-card ${
                      name === itemName
                        ? "text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3"
                        : "text-blue w-16"
                    }`}
                  >
                    {name === itemName && <div className="text-lg font-medium">Start mining</div>}
                    <IoIosArrowForward className={`${name === itemName ? "text-2xl" : "text-3xl"}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trade;
