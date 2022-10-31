import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Paths from "./Pages/Paths";
import People from "./Pages/People";
import { Routes, Route } from "react-router-dom";
import PersonDetail from "./Pages/PersonDetail";
import FullStack from "./Pages/FullStack";
import Aws from "./Pages/Aws";
import Login from "./Pages/Login"
import PrivateRouter from "./Pages/PrivateRouter";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/people" element={<People/>}/>
        <Route path="people/:id" element={<PersonDetail />} />
        <Route path="paths" element={<Paths />}>
          <Route index element={<FullStack />} />
          <Route path="aws" element={<Aws />} />
        </Route>
        <Route path="contact" element={<PrivateRouter />}>
          <Route path="" element={<Contact />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
