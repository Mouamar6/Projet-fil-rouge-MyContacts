require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authController = require('./controllers/authController');
const contactController = require('./controllers/contactController');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
app.use(cors());
app.use(express.json());
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentification des utilisateurs
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Créer un nouvel utilisateur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: test@example.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       400:
 *         description: Email déjà utilisé
 */

app.post('/auth/register', authController.register);
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Connecter un utilisateur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: test@example.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Connexion réussie, retourne un token JWT
 *       400:
 *         description: Identifiants invalides
 */
app.post('/auth/login', authController.login);
/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Gestion des contacts d'un utilisateur
 */

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Récupérer tous les contacts de l'utilisateur connecté
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des contacts
 *       401:
 *         description: Non autorisé
 *
 *   post:
 *     summary: Ajouter un contact
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - phone
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: John
 *               lastName:
 *                 type: string
 *                 example: Doe
 *               phone:
 *                 type: string
 *                 example: 0123456789
 */
app.get('/contacts', authMiddleware, contactController.getContacts);

app.post('/contacts', authMiddleware, contactController.createContact);
/**
 * @swagger
 * /contacts/{id}:
 *   patch:
 *     summary: Modifier un contact
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contact modifié
 *       404:
 *         description: Contact non trouvé
 *       401:
 *         description: Non autorisé
 *
 *   delete:
 *     summary: Supprimer un contact
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du contact
 *     responses:
 *       200:
 *         description: Contact supprimé
 *       404:
 *         description: Contact non trouvé
 *       401:
 *         description: Non autorisé
 */
app.patch('/contacts/:id', authMiddleware, contactController.updateContact);
app.delete('/contacts/:id', authMiddleware, contactController.deleteContact);

const swaggerDocs = require('./swagger');
swaggerDocs(app);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connecté !'))
  .catch(err => console.log('Erreur MongoDB :', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));