import { Link, Outlet } from "react-router-dom";

import s from "./SignOrLogin.module.css";
import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectUserEmail,
} from "../../redux/auth/selectors.js";
import LogOut from "../LogOut/LogOut.jsx";

const SignOrLogin = () => {
  const isLogged = useSelector(selectIsLoggedIn);
  const userEmail = useSelector(selectUserEmail);
  return (
    <>
      {isLogged ? <h2> Hello {userEmail}</h2> : ""}

      <div className={s.cont}>
        <Link to="login"> Login</Link>
        <Link to="register">Register</Link>
      </div>
      <Outlet />
      {isLogged ? <LogOut /> : ""}
    </>
  );
};

export default SignOrLogin;
