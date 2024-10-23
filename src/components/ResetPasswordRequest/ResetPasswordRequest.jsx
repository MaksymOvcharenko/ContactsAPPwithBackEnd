import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendResetPasswordEmail } from "../../redux/auth/operations.js";
import {
  selectSendResetEmail,
  selectSendResetEmailOpen,
} from "../../redux/auth/selectors.js";
import s from "./ResetPasswordRequest.module.css";

const ResetPasswordRequest = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const isOpen = useSelector(selectSendResetEmailOpen);
  const sendSuccess = useSelector(selectSendResetEmail);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendResetPasswordEmail(email));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <label>Please enter your Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className={s.btn}>
          Reset Password
        </button>
      </form>
      {isOpen &&
        (sendSuccess ? (
          <p>Check your email for reset password</p>
        ) : (
          <p>User not found</p>
        ))}
    </>
  );
};

export default ResetPasswordRequest;
