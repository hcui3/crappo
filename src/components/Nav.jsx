import { navData } from "../data";

const Nav = () => {
  return (
    <ul className="flex gap-8">
      {navData.map((item, index) => {
        const { name, href } = item;

        return (
          <li key={index}>
            <a className="link-nav transition-all duration-300" href={href}>
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
