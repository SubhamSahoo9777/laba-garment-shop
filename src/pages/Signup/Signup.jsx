import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";

const Signup = () => {
  const { login } = useGlobalContext(); // simulate user registration
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    login({ name });
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSignup} style={styles.form}>
        <h2>Signup</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Signup</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex", justifyContent: "center", alignItems: "center", height: "80vh"
  },
  form: {
    background: "#fff", padding: "2rem", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    display: "flex", flexDirection: "column", gap: "1rem", width: "300px"
  },
  input: {
    padding: "0.75rem", border: "1px solid #ccc", borderRadius: "5px"
  },
  button: {
    padding: "0.75rem", background: "#333", color: "#fff", borderRadius: "5px", border: "none"
  }
};

export default Signup;
