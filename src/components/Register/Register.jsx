import { Field, Form, Formik } from "formik";
import s from "./Register.module.css";
import { useDispatch } from "react-redux";
import { FormLabel } from "@mui/material";
import { register } from "../../redux/auth/operations.js";
export const Register = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.bg}>
        <h2>REGISTRATION PAGE</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            dispatch(register(values));
          }}
        >
          <Form className={s.form}>
            <FormLabel for="name" className={s.label}>
              Name
              <Field
                name="name"
                type="text"
                placeholder="Please enter your name"
                className={s.input}
              ></Field>
            </FormLabel>
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
            <button type="submit">Register</button>
            {/* <Link to="/login"> Do you already have account? Please LogIn</Link> */}
          </Form>
        </Formik>
      </div>
    </>
  );
};
