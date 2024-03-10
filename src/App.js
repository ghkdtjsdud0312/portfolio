import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./utils/GlobalStyle";
import MainPage from "./pages/MainPage";
import Layout from "./pages/Layout";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
