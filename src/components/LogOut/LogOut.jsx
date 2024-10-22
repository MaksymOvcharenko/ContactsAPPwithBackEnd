import { useDispatch } from "react-redux";
import s from "./LogOut.module.css";
import { logout } from "../../redux/auth/operations.js";

const LogOut = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        className={s.btn}
        onClick={() => {
          dispatch(logout());
        }}
      >
        LogOut
      </button>
    </>
  );
};

export default LogOut;
