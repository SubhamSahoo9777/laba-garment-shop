import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Settings/Settings";


const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarOnRoutes = ["/","/home/dashboard","/home/settings"]; // Add more paths like "/landing" if needed

  const shouldShowNavbar = !hideNavbarOnRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {children}
    </>
  );
};
const App = () => {
  return (
    <GlobalProvider>
      <Router>
      <Layout>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home/dashboard" element={<Dashboard />} />
          <Route path="/home/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      </Router>
    </GlobalProvider>
  );
};

export default App;
