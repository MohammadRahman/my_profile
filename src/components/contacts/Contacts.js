import React from "react";
import "./contact.scss";
import { CONTACT_DATA } from "../../data/techData";
import { SocialIcon } from "react-social-icons";
import ContactType from "./contact-item/ContactType";

export class Contacts extends React.Component {
  // const [contacts, setContacts] = React.useState(CONTACT_DATA);
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          id: 981231,
          title: "portfolio",
          types: [],
        },
        {
          id: 34511,
          title: "Social contacts",
          types: [
            {
              id: 1111,
              name: "face book",
              // logo: <i class="fab fa-facebook fa-3x"></i>,
              linkUrl: <SocialIcon url="https://www.facebook.com/apu.eng1/" />,
            },
            {
              id: 1112,
              name: "Instagram",
              // logo: <i class="fab fa-instagram-square fa-3x"></i>,
              linkUrl: (
                <SocialIcon url="https://www.linkedin.com/in/mohammad-obaidur-rahman-094200181/" />
              ),
            },
            {
              id: 1111,
              name: "Instagram",
              // logo: <i class="fab fa-twitter-square fa-3x"></i>,
              linkUrl: (
                <SocialIcon url="https://www.instagram.com/obaidur_apu/" />
              ),
            },
            {
              id: 1111,
              name: "Twiter",
              // logo: <i class="fab fa-twitter-square fa-3x"></i>,
              linkUrl: <SocialIcon url="https://twitter.com/Apuobaidur" />,
            },
          ],
        },
        {
          id: 1923412,
          title: "mail",
          phone: "xxx-xxx-xxx",
          types: [],
        },
      ],
    };
  }
  render() {
    const { contacts } = this.state;
    return (
      <div className="contacts-container">
        <div className="contacts">
          {contacts.map((contact) => (
            <ContactType key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    );
  }
}

export default Contacts;
