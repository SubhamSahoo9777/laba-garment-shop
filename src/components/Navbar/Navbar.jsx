import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useGlobalContext();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">SD Garments</Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        {user ? (
          <>
            <span className="navbar-user">Hi, {user.name}</span>
            <button className="navbar-button" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-button">Login</Link>
            <Link to="/signup" className="navbar-button ml">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
