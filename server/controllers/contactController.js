
/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Gestion des contacts
 */

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Liste des utilisateurs connectés
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des contacts
 *       401:
 *         description: Non autorisé
 */
const Contact = require('../models/Contact');

exports.getContacts = async (req, res) => {
  const contacts = await Contact.find({ user: req.user._id });
  res.json(contacts);
};
/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Création des contacts
 */

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Liste des utilisateurs créés
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Creation du contact
 *       401:
 *         description: Non autorisé
 */
exports.createContact = async (req, res) => {
  const { firstName, lastName, phone } = req.body;
  try {
    const contact = await Contact.create({user: req.user._id,firstName,lastName,phone});
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Modifier des contacts déja créés
 */

/**
 * @swagger
 * /contacts:
 *   patch:
 *     summary: Modification des contacts déja créés
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Modification du contact
 *       401:
 *         description: Non autorisé
 */
exports.updateContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findOneAndUpdate({ _id: id, user: req.user._id },req.body,{ new: true });
    if (!contact) return res.status(404).json({ message: 'Contact non trouvé' });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Suppprimer des contacts déja créés
 */

/**
 * @swagger
 * /contacts:
 *   delete:
 *     summary: Nouvelle liste des utilisateurs connectés
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Suppression du contact
 *       401:
 *         description: Non autorisé
 */
exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findOneAndDelete({ _id: id, user: req.user._id });
    if (!contact) return res.status(404).json({ message: 'Contact non trouvé' });
    res.json({ message: 'Contact supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }


/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Gestion des contacts
 */

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Liste des utilisateurs connectés
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des contacts
 *       401:
 *         description: Non autorisé
 */
const Contact = require('../models/Contact');

exports.getContacts = async (req, res) => {
  const contacts = await Contact.find({ user: req.user._id });
  res.json(contacts);
};
/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Création des contacts
 */

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Liste des utilisateurs créés
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Creation du contact
 *       401:
 *         description: Non autorisé
 */
exports.createContact = async (req, res) => {
  const { firstName, lastName, phone } = req.body;
  try {
    const contact = await Contact.create({user: req.user._id,firstName,lastName,phone});
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Modifier des contacts déja créés
 */

/**
 * @swagger
 * /contacts:
 *   patch:
 *     summary: Modification des contacts déja créés
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Modification du contact
 *       401:
 *         description: Non autorisé
 */
exports.updateContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findOneAndUpdate({ _id: id, user: req.user._id },req.body,{ new: true });
    if (!contact) return res.status(404).json({ message: 'Contact non trouvé' });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Suppprimer des contacts déja créés
 */

/**
 * @swagger
 * /contacts:
 *   delete:
 *     summary: Nouvelle liste des utilisateurs connectés
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Suppression du contact
 *       401:
 *         description: Non autorisé
 */
exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findOneAndDelete({ _id: id, user: req.user._id });
    if (!contact) return res.status(404).json({ message: 'Contact non trouvé' });
    res.json({ message: 'Contact supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
