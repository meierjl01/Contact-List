import $ from 'jquery';
import singleContact from './singlecontact';

function contactList(contacts, session) {
  let contactDiv = $(`
      <div id="contacts">
        <h2>Your Contacts:</h2>
      </div>
    `);
  let contactList = $(`
      <ul>
      </ul>
    `);
    contactList.empty();
    contacts.forEach((contact, i, arr) => {
      contactList.append(singleContact(contact));
    });
    contactDiv.append(contactList);
    return contactDiv;
}

export default contactList;
