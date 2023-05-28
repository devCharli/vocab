import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/About";
import "./App.css";
import TestPage from "./pages/Test";
import Test from "./pages/Test/[id]";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/test/:id" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
