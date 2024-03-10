import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
            <Route path="/portfolio" element={<MainPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
