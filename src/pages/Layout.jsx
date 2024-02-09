import Header from "../component/Layout/Header";
import Footer from "../component/Layout/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../component/Layout/ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
