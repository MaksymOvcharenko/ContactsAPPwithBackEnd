import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectSendResetEmail,
  selectSendResetEmailOpen,
} from "../../redux/auth/selectors.js";
import s from "./ResetPassword.module.css";
import { Link } from "react-router-dom";
import { resetPassword } from "../../redux/auth/operations.js";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isOpen = useSelector(selectSendResetEmailOpen);
  const sendSuccess = useSelector(selectSendResetEmail);
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (token) {
      dispatch(resetPassword({ token, password }));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <label>Please enter your New Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className={s.btn}>
          Change Password
        </button>
      </form>
      {isOpen &&
        (sendSuccess ? (
          <p>
            Password has been changed, Go to <Link to="/auth/login">Login</Link>
          </p>
        ) : (
          <p>
            Oh, no. Time is end. Please reset again <br />
            <Link to="/auth/send-reset-password">RESET</Link>
          </p>
        ))}
    </>
  );
};

export default ResetPassword;
