import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import Layout from "./Layout.jsx";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/auth" element={<SignOrLogin />}>
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="register" element={<Register />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
          <Route path="/contacts" element={<ContactList />}>
            <Route path=":contactId" element={<ContactInfo />} />
          </Route> */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
