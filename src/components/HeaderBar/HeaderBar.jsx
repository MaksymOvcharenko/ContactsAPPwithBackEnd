import { IoIosLogIn } from "react-icons/io";
import s from "./HeaderBar.module.css";
import { FcBusinessContact } from "react-icons/fc";
import { Link, NavLink } from "react-router-dom";
const HeaderBar = () => {
  return (
    <div className={s.header}>
      <FcBusinessContact size={60} />
      <nav className={s.navCont}>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={s.navItem}>Contacts</li>
        </ul>
      </nav>
      <ul className={s.authList}>
        <li className={s.authItem}>
          <NavLink to={"auth/login"}>
            <IoIosLogIn size={40} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HeaderBar;
