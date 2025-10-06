
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authController = require('./controllers/authController');
const contactController = require('./controllers/contactController');
const authMiddleware = require('./middleware/authMiddleware');
const swaggerJsDocs = require('./swagger');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/auth/register', authController.register);
app.post('/auth/login', authController.login);

// Routes Contacts (protégées)
app.get('/contacts', authMiddleware, contactController.getContacts);
app.post('/contacts', authMiddleware, contactController.createContact);
app.patch('/contacts/:id', authMiddleware, contactController.updateContact);
app.delete('/contacts/:id', authMiddleware, contactController.deleteContact);

// Swagger
swaggerJsDocs(app);

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connecté !'))
  .catch(err => console.log('Erreur MongoDB :', err));

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authController = require('./controllers/authController');
const contactController = require('./controllers/contactController');
const authMiddleware = require('./middleware/authMiddleware');
const swaggerJsDocs = require('./swagger');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/auth/register', authController.register);
app.post('/auth/login', authController.login);

// Routes Contacts (protégées)
app.get('/contacts', authMiddleware, contactController.getContacts);
app.post('/contacts', authMiddleware, contactController.createContact);
app.patch('/contacts/:id', authMiddleware, contactController.updateContact);
app.delete('/contacts/:id', authMiddleware, contactController.deleteContact);

// Swagger
swaggerJsDocs(app);

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connecté !'))
  .catch(err => console.log('Erreur MongoDB :', err));

// Lancer serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));