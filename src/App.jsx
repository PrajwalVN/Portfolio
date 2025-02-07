import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Resume from "./components/Resume";
import Career from "./components/Career";
import Collection from "./components/Collection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="Home" element={<Home />} />
        <Route path="Career" element={<Career />} />
        <Route path="Resume" element={<Resume />} />
        <Route path="Collection" element={<Collection />} />
      </Routes>
    </Router>
  );
}

export default App;
