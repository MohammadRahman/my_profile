import React from "react";
import "./contact.scss";
import { CONTACT_DATA } from "../../data/techData";
import ContactType from "./contact-item/ContactType";

const Contacts = () => {
  const [contacts, setContacts] = React.useState(CONTACT_DATA);
  return (
    <div className="contacts-container">
      <div className="contacts">
        {contacts.map((contact) => (
          <ContactType key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
