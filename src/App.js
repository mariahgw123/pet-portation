import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import NavBar from "./components/navBar";
import OurServices from "./components/ourServices";
import Media from "./components/media";
import ContactUs from "./components/contactUs";
import SignIn from "./components/signIn";

//tab in browser title
document.title = "Pet-Portation";
//tab in browser logo
document.logo = null;

function App() {
  return (
    <main className='container-fluid' id='root'>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='ourServices' element={<OurServices />} />
          <Route path='media' element={<Media />} />
          <Route path='contactUs' element={<ContactUs />} />
          <Route path='signIn' element={<SignIn />} />
        </Routes>
      </div>
    </main> //#root
  );
}

export default App;
