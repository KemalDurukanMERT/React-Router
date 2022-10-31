import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Paths from "./Pages/Paths";
import People from "./Pages/People";
import { Routes, Route } from "react-router-dom";
import PersonDetail from "./Pages/PersonDetail";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/people" element={<People/>}/>
        <Route path="people/:id" element={<PersonDetail />} />
        <Route path="/paths" element={<Paths/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
