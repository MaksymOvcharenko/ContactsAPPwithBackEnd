import { Suspense } from "react";
import HeaderBar from "./components/HeaderBar/HeaderBar.jsx";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        margin: "0 auto",
        height: "100vh",
        display: "flex",
        // justifyContent: "space-between",
        flexDirection: "column",
        background: "white",
        // width: "100vw",
      }}
    >
      <HeaderBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
