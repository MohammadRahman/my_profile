import React from "react";
import "./contactType.scss";
const ContactType = ({ contact }) => {
  return (
    <div className="contact-Item-container">
      <div
        className="contact-Item-title"
        style={{
          display: "flex",
          width: "100%",
          height: "30%",
          border: "1px solid black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {contact.title}
      </div>

      <div className="social-contacts">
        <div
          style={{
            display: "flex",
            // flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          {contact.types.map((type) => {
            return (
              <div key={type.id} className="social-contacts-container">
                <div className="social-contacts-logo">{type.linkUrl}</div>
                <div className="social-contacts-title">{type.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactType;
