import { IoIosLogIn } from "react-icons/io";
import s from "./HeaderBar.module.css";
import { FcBusinessContact } from "react-icons/fc";
import { NavLink } from "react-router-dom";
const HeaderBar = () => {
  return (
    <div className={s.header}>
      <FcBusinessContact size={60} />
      <nav className={s.navCont}>
        <ul className={s.navList}>
          <li className={s.navItem}>Home</li>
          <li className={s.navItem}>Contacts</li>
        </ul>
      </nav>
      <ul className={s.authList}>
        <li className={s.authItem}>
          <NavLink to={"auth/register"}>
            <IoIosLogIn size={40} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HeaderBar;
