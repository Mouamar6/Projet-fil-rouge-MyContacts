# Projet-fil-rouge-MyContacts
MyContacts est une application web fullstack JavaScript (MERN) permettant à chaque utilisateur de gérer son carnet de contacts personnel de manière simple et sécurisée.
Chaque utilisateur peut s’inscrire, se connecter via JWT, et effectuer un CRUD complet (ajout, modification, suppression, consultation) sur ses propres contacts.

🚀 Fonctionnalités principales
🔐 Authentification (JWT)

Inscription : création de compte avec email unique et mot de passe hashé via bcrypt.

Connexion : génération d’un token JWT valable 24h.

Middleware d’autorisation : protège toutes les routes /contacts.

👥 Gestion des contacts

Création, lecture, mise à jour et suppression de ses propres contacts.

Champs du modèle :

firstName (obligatoire)

lastName (obligatoire)

phone (obligatoire, entre 10 et 20 caractères)

(Bonus) Possibilité d’ajouter d’autres champs (email, adresse, note…).

🖥️ Interface utilisateur (Frontend React)

Page Login / Register connectée à l’API backend.

Page Contacts listant les contacts de l’utilisateur connecté.

Formulaire d’ajout et d’édition.

Suppression de contact.

(Bonus) Recherche, design responsive et agréable.

🏗️ Stack technique
Côté	Technologies principales
Frontend	React, Fetch API, React Router DOM
Backend	Node.js, Express.js, MongoDB, Mongoose
Sécurité	Bcrypt, JSON Web Token (JWT), dotenv
Autres	Swagger (documentation API), CORS, Nodemon
⚙️ Installation et exécution
🧩 1. Cloner le projet
git clone https://github.com/Mouamar6/Projet-fil-rouge-MyContacts.git
git clone git@github.com:Mouamar6/Projet-fil-rouge-MyContacts.git
cd Projet-fil-rouge-MyContacts

🗄️ 2. Backend
🔧 Installation des dépendances
cd server
npm install

⚙️ Variables d’environnement (.env)

Crée un fichier .env à la racine du dossier backend :

MONGO_URI=mongodb+srv://Mouamar:Momboladji20@cluster0.kf3d79l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
JWT_SECRET=ta_clef_secrete

▶️ Lancer le serveur
node server.js

Serveur disponible sur http://localhost:5000

💻 3. Frontend
🔧 Installation
cd client
npm install

▶️ Lancer l’application React
npm start


Interface disponible sur http://localhost:3000

📚 Documentation API (Swagger)

Une documentation automatique de l’API est disponible sur :

http://localhost:5000/api-docs

Exemple d’endpoints :
Méthode	Route	Description	Auth requise
POST	/auth/register	Inscription d’un utilisateur	❌
POST	/auth/login	Connexion et génération du JWT	❌
GET	/contacts	Récupérer mes contacts	✅
POST	/contacts	Ajouter un contact	✅
PATCH	/contacts/:id	Modifier un contact	✅
DELETE	/contacts/:id	Supprimer un contact	✅
🧪 Tests unitaires

Des tests sont effectués sur :

Les routes /auth (inscription, connexion)

Les routes /contacts (ajout, mise à jour, suppression)

Lancer les tests :
npm test

🌍 Déploiement
Partie	Plateforme recommandée
Backend	Render

Frontend	Netlify
 ou Render
📁 Structure du projet
MyContacts/
│
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── contactController.js
│   ├── models/
│   │   ├── User.js
│   │   └── Contact.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── contactRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Contacts.jsx
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│
└── README.md

🧑‍💻 Auteur

👤 Mouamar Momboladji ADJAHO
Étudiant à Epitech Bénin, passionné par le développement fullstack et la création d’applications modernes et intuitives.

📧 Contact : mouamar.adjaho@efrei.net