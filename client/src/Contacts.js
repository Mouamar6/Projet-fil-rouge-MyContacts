import React, { useState, useEffect } from "react";
import "./Contacts.css";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "" });
  const [editId, setEditId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const token = localStorage.getItem("token");


  const fetchContacts = async () => {
    try {
      const res = await fetch("http://localhost:5000/contacts", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      setErrorMessage("Erreur lors du chargement des contacts");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (editId) {
        res = await fetch(`http://localhost:5000/contacts/${editId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify(form)
        });
      } else {
        res = await fetch("http://localhost:5000/contacts", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify(form)
        });
      }

      if (!res.ok) {
        const data = await res.json();
        setErrorMessage(data.message || "Erreur inconnue");
        return;
      }

      setForm({ firstName: "", lastName: "", phone: "" });
      setEditId(null);
      fetchContacts();
    } catch (err) {
      setErrorMessage("Erreur serveur : " + err.message);
    }
  };

  const handleEdit = (contact) => {
    setForm(contact);
    setEditId(contact._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce contact ?")) return;
    try {
      const res = await fetch(`http://localhost:5000/contacts/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) {
        const data = await res.json();
        setErrorMessage(data.message || "Erreur inconnue");
        return;
      }
      fetchContacts();
    } catch (err) {
      setErrorMessage("Erreur serveur : " + err.message);
    }
  };

  return (
    <div className="contacts-container">
      <h2>Contacts</h2>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          name="firstName"
          placeholder="Prénom"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <input
          name="lastName"
          placeholder="Nom"
          value={form.lastName}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Téléphone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">{editId ? "Modifier" : "Ajouter"}</button>
      </form>

      <ul className="contact-list">
        {contacts.map(contact => (
          <li key={contact._id}>
            {contact.firstName} {contact.lastName} - {contact.phone}
            <button onClick={() => handleEdit(contact)}>Éditer</button>
            <button onClick={() => handleDelete(contact._id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;