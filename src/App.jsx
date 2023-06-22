import { Routes, Route } from "react-router-dom";
import Problem1 from "./components/Problem-1.jsx";
import Menu from "./components/Menu.jsx";
import Index from "./components/Index.jsx";
import Problem2 from "./components/Problem-2.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="/problem1" element={<Problem1 />} />
          <Route path="/problem2" element={<Problem2 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
