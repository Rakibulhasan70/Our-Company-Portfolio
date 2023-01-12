import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./Components/pages/Home/Home";
import Login from "./Components/pages/Authentication/Login";
import ContactUs from "./Components/pages/ContactUs/ContactUs";
import AboutUS from "./Components/pages/Aboutus/AboutUS";
import Service from "./Components/pages/Services/Service";
import Registration from "./Components/pages/Authentication/Registration";
import NotFound from "./Components/pages/Shared/NotFound";
// import Navbar from "./Components/pages/Shared/Navbar";
import Header from "./Components/pages/Shared/Header";

function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
        <Route path="/aboutUs" element={<AboutUS />}></Route>
        <Route path="/services" element={<Service />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>

      {/* <RouterProvider router={router}></RouterProvider> */}
    </div>
  );
}

export default App;
