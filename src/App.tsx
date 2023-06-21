import { Route, Routes } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/About";
import TestPage from "./pages/Grammar/Test";
import Test from "./pages/Grammar/Test/[id]";
import Layout from "./Layout";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/grammar/test" element={<TestPage />} />
        <Route path="/grammar/test/:id" element={<Test />} />
      </Routes>
    </Layout>
  );
}

export default App;
