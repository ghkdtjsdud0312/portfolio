import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import GlobalStyle from "./utils/GlobalStyle";
import MainPage from "./pages/MainPage";
import Layout from "./pages/Layout";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
