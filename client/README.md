📒 MyContacts App

Application web fullstack JavaScript (React + Node/Express + MongoDB) permettant à chaque utilisateur de gérer son carnet de contacts personnel. L’application est sécurisée par JWT et propose un CRUD complet sur les contacts.

🔹 Fonctionnalités
Authentification

Inscription (POST /auth/register) : email unique, mot de passe hashé avec bcrypt.

Connexion (POST /auth/login) : renvoie un token JWT.

Middleware JWT : protège toutes les routes /contacts.

Gestion des contacts

Modèle Contact :

firstName (obligatoire)

lastName (obligatoire)

phone (obligatoire, 10–20 caractères recommandé)

CRUD complet :

GET /contacts : récupère uniquement les contacts de l’utilisateur connecté

POST /contacts : ajoute un nouveau contact

PATCH /contacts/:id : modifie un contact existant

DELETE /contacts/:id : supprime un contact

Frontend (React)

Pages :

Login / Register (connexion à l’API backend)

Contacts (liste + ajout via formulaire)

Édition et suppression

Bonus : recherche, design amélioré avec CSS ou Tailwind

Sécurité

Hash des mots de passe avec bcrypt

JWT obligatoire pour toutes les routes /contacts

CORS activé sur le backend

💻 Installation et lancement
Prérequis

Node.js >= 18

MongoDB local ou Atlas

npm 

Backend

Cloner le dépôt :

git clone git@github.com:Mouamar6/Projet-fil-rouge-MyContacts.git

cd backend


Installer les dépendances :

npm install


Créer un fichier .env avec le contenu suivant :

MONGO_URI=mongodb+srv://Mouamar:Momboladji20@cluster0.kf3d79l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
JWT_SECRET=ta_clef_secrete


Lancer le serveur :

node server.js


Le backend écoute sur http://localhost:5000

Frontend

Aller dans le dossier frontend :

cd frontend


Installer les dépendances :

npm install


Lancer le frontend :

npm start


Le frontend sera accessible sur http://localhost:3000

⚡ Endpoints API

Auth
Méthode	Endpoint	Description
POST	/auth/register	Inscription
POST	/auth/login	Connexion

Contacts
Méthode	Endpoint	Description	Auth
GET	/contacts	-> Récupère tous les contacts de l’utilisateur	
POST	/contacts	-> Crée un nouveau contact	
PATCH	/contacts/:id	-> Modifie un contact existant	
DELETE	/contacts/:id	->Supprime un contact	

🗂 Architecture Backend
backend/
├── controllers/       # Logique métier (auth, contacts)
├── models/            # Schémas Mongoose
│   ├── Contact.js
│   └── User.js            
├── middleware/        # Auth JWT
│   ├── authMiddleware.js
│ 
├── server.js          # Point d’entrée de l’API
└── .env               # Variables d’environnement

📌 Sécurité

Mot de passe hashé avec bcrypt

Routes /contacts protégées par JWT

CORS activé pour permettre les requêtes depuis le frontend

📌 Bonnes pratiques

Toujours valider le côté serveur les données reçues

Ne jamais exposer le JWT ou les mots de passe en clair

Stocker le token côté client (localStorage ou cookies sécurisés)

Décoder le JWT côté frontend pour afficher les informations utilisateur si nécessaire