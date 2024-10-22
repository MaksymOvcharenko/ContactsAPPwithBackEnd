import { FormLabel } from "@mui/material";
import { Field, Form, Formik } from "formik";
import s from "./Login.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux/auth/operations.js";
export const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Please LogIn</h2>
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
          <Link to="register">
            {" "}
            Don`t have account? <br />
            Please Register
          </Link>
        </Form>
      </Formik>
    </div>
  );
};
