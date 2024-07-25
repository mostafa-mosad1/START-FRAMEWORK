/* eslint-disable no-unused-vars */
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/Footer/Footer";
import Layout from "./component/Layout/Layout";
import Errors from "./component/Errors/Errors";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from "./component/Contact/Contact";


let routers = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "ABOUT", element: <About /> },
      { path: "PORTFOLIO", element: <Portfolio /> },
      { path: "CONTACT", element: <Contact /> },
      { path: "*", element: <Errors /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers}> </RouterProvider>;
  
}

export default App;
