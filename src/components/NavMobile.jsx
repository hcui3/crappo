import { navData } from "../data";

const NavMobile = () => {
  return (
    <ul className="h-full flex flex-col items-center justify-center gap-8">
      {navData.map((item, index) => {
        const { name, href } = item;

        return (
          <li key={index}>
            <a className="text-xl font-normal hover:font-medium" href={href}>
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMobile;
