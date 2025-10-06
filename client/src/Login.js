import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      console.log("Réponse backend:", data);

      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert(data.message);
        navigate("/Contacts");
      } else {
        setErrorMessage(data.message || "Erreur inconnue");
      }
    } catch (err) {
      setErrorMessage("Erreur serveur : " + err.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Connexion</h2>

        <div className="input-group">
          <label>Email</label>
          <div className="input-wrapper">
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label>Mot de passe</label>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        {errorMessage && (
          <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
        )}

        <button type="submit" className="btn">Connexion</button>

        <p className="switch">
          Pas de compte? <a href="/Register">Inscription</a>
        </p>
      </form>
    </div>
  );
}

export default Login;