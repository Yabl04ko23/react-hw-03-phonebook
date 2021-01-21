import React, { Component } from "react";
import ContactsListItem from "../ContactsListItem/ContactsListItem";
import PropTypes from "prop-types";

class ContactList extends Component {
  render() {
    ContactList.propTypes = {
      contactsItem: PropTypes.array,
      onDeleteContact: PropTypes.func,
    };
    const { contactsItem, onDeleteContact } = this.props;
    return (
      <ul>
        {contactsItem.map((contactsItem) => {
          return (
            <ContactsListItem
              key={contactsItem.id}
              name={contactsItem.name}
              number={contactsItem.number}
              onDelete={() => onDeleteContact(contactsItem.id)}
            />
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
