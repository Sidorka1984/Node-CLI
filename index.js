const contactsOperations = require("./contacts");
const argv = require('yargs').argv;

// TODO: рефакторить;
async function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case "list":
        const contacts = await contactsOperations.listContacts();
        console.table(contacts);
        break;
         
      case "get":
        const contactById = await contactsOperations.getContactById(id);
        console.log(contactById);
        break;

      case "add":
        const addContacts = await contactsOperations.addContact({ name, email, phone });
        console.log(addContacts);
        break;
      
      case "remove":
        await contactsOperations.removeContact(id);
        console.log("Success remove");
        break;
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    throw error;
  }
}

invokeAction(argv);

// const workWithContacts = async (type = 'listContacts', id, name, email, phone) => {
    // try {
        // switch (type) {
            // case 'listContacts':
                // return await contactsOperations.listContacts();
            // case 'getContactById':
                // return await contactsOperations.getContactById(id);
            // case 'removeContact':
                // return await contactsOperations.removeContact(id);
            // case 'addContact':
                // return await contactsOperations.addContact( name, email, phone );
        // }
    // } catch (error) {
        // throw error;
    // }
// }

// workWithContacts('listContacts')
    // .then(data => console.table(data))
    // .catch(error => console.table(error))

// workWithContacts('getContactById', 7)
//  .then(data => console.log(data))
//  .catch(error => console.log(error))
// 
// workWithContacts('removeContact', 7)
    // .then(data => console.table(data))
    // .catch(error => console.table(error))
// 
// const newData = {
    // name: 'Diana Dinisova',
    // email: 'diana@gmail.com',
    // phone: '0990009999'
// }
// workWithContacts('addContact', '', newData)
    // .then(data => console.table(data))
    // .catch(error => console.table(error))
// 



