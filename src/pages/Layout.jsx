import Header from "../component/Layout/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ScrollToTop from "../component/Layout/scrollToTop";

const LayoutComp = styled.div`
  main {
    flex-grow: 2;
    /* width: 100%; */
  }
`;

const Layout = () => {
  return (
    <LayoutComp>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
    </LayoutComp>
  );
};

export default Layout;
