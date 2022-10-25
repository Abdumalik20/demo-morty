import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Docs from "./pages/Document/Docs";
import Support from "./pages/Support/Support";
import About from "./pages/About/About";
import HeroDetail from "./pages/HeroDetail/HeroDetail";

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/docs" element={<Docs />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/heroDetail/:id" element={<HeroDetail />}></Route>
        </Routes>
      </div>
  );
}

export default App;
