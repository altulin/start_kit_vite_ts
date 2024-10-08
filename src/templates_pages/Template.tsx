import Header from "../components/header/Header";

// import Footer from "@/components/footer/Footer";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Template;
