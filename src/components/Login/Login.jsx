import { FormLabel } from "@mui/material";
import { Field, Form, Formik } from "formik";
import s from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux/auth/operations.js";
import {
  selectIsValidPassword,
  selectSendResetEmailOpen,
} from "../../redux/auth/selectors.js";
export const Login = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectSendResetEmailOpen);
  const notValid = useSelector(selectIsValidPassword);
  return (
    <div>
      <h2>Please LogIn</h2>
      {isOpen &&
        (notValid ? (
          <p style={{ color: "red" }}>Email or password is not valid</p>
        ) : (
          <p style={{ color: "green" }}>Login Successfully</p>
        ))}
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          dispatch(login(values));
        }}
      >
        <Form className={s.form}>
          <FormLabel for="email" className={s.label}>
            Email
            <Field
              name="email"
              type="email"
              placeholder="Please enter your email"
              className={s.input}
            ></Field>
          </FormLabel>

          <FormLabel for="password" className={s.label}>
            Password
            <Field
              name="password"
              type="password"
              placeholder="Please enter your password"
              className={s.input}
            ></Field>
          </FormLabel>
          <button type="submit" className={s.btn}>
            Register
          </button>
          <Link to="/auth/register">
            {" "}
            Don`t have account? <br />
            Please Register
          </Link>
          <Link to="/auth/send-reset-password">Forgot password</Link>
        </Form>
      </Formik>
    </div>
  );
};
