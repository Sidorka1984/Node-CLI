const {v4} = require("uuid");
const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

async function addContact(data) {
  const contacts = await listContacts();
  const newContact = { ...data, id: v4() };
  contacts.push(newContact)
  await updateContacts(contacts);
  return newContact;
}

module.exports = addContact;

