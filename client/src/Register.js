import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error("Le serveur n'a pas renvoyé de JSON valide");
      }

      if (res.ok && data.user) {
        localStorage.setItem("token", data.token);

        setEmail("");
        setPassword("");

        navigate(`/user/${data.user._id}`);
      } else {
        setErrorMessage(data.message || "Erreur inconnue");
      }
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleRegister}>
        <h2>Inscription</h2>

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
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        {errorMessage && (
          <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
        )}

        <button type="submit" className="btn">S'inscrire</button>

        <p className="switch">
          Déjà un compte ? <a href="/">Connexion</a>
        </p>
      </form>
    </div>
  );
}

export default Register;