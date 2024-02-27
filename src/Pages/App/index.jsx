import { useRoutes, BrowserRouter } from "react-router-dom";
//import Home from "../Home";
import Navbar from "../../Components/NavBar";
import Developers from "../Developers";
import Projects from "../Projects";
//import About_me from "../AboutMe";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    // { path: "/", element: <Home /> },
    { path: "/Developers", element: <Developers /> },
    { path: "/Projects", element: <Projects /> },
    // { path: "/About-me", element: <About_me /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
