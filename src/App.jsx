import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import Home from "./assets/components/Home";
import Footer from "./assets/components/Footer";
import Page from "./assets/components/Page";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Home />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/header" element={<Header />} />
          <Route path="/main" element={<Main />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={<Page />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
