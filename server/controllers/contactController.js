

const Contact = require('../models/Contact');

exports.getContacts = async (req, res) => {
  const contacts = await Contact.find({ user: req.user._id });
  res.json(contacts);
};

exports.createContact = async (req, res) => {
  const { firstName, lastName, phone } = req.body;
  try {
    const contact = await Contact.create({user: req.user._id,firstName,lastName,phone});
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

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
exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findOneAndDelete({ _id: id, user: req.user._id });
    if (!contact) return res.status(404).json({ message: 'Contact non trouvé' });
    res.json({ message: 'Contact supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  }

