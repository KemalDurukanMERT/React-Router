import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Paths from "./Pages/Paths";
import People from "./Pages/People";

function App() {
  return (
    <>
      <Nav/>
      <Home/>
      <People/>
      <Paths/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
