import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import GlobalStyle from "./utils/GlobalStyle";
import MainPage from "./pages/MainPage";
import Layout from "./pages/Layout";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
