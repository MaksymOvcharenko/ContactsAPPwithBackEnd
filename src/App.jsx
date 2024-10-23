import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import Layout from "./Layout.jsx";
import SignOrLogin from "./components/SignOrLogin/SignOrLogin.jsx";
import { Register } from "./components/Register/Register.jsx";
import { Login } from "./components/Login/Login.jsx";
import { useDispatch } from "react-redux";
import { refresh } from "./redux/auth/operations.js";
import { useEffect } from "react";
import ResetPasswordRequest from "./components/ResetPasswordRequest/ResetPasswordRequest.jsx";
import ResetPassword from "./components/ResetPassword/ResetPassword.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/" element={<SignOrLogin />}>
            <Route path="login" element={<Login />} />
            {/* <Route path="logout" element={<Logout />} /> */}
            <Route path="register" element={<Register />} />
            {/* <Route path="reset-password" element={<ResetPassword />} /> */}
          </Route>
          <Route
            path="/auth/send-reset-password"
            element={<ResetPasswordRequest />}
          />
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* <Route path="/contacts" element={<ContactList />}>
            <Route path=":contactId" element={<ContactInfo />} />
          </Route> */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
