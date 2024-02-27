import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center">
      <ul className="flex items-center gap-5">
        <li className="font-semibold text-lg">
          {/* <NavLink to="/">Los Mejores 5 restaurantes de Bogotá </NavLink> */}
        </li>
        {/* <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/developers"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Lista Restaurantes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Tarjeta de Restaurantes
          </NavLink>
        </li>
        <li>
          {/* <NavLink
            to="/about-me"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About me
          </NavLink> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
