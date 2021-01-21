import React, { Component } from "react";
import PropTypes from 'prop-types';

class ContactsListItem extends Component {
  render() {
    ContactsListItem.propTypes = {
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
      onDelete: PropTypes.func
    }
    const { id, name, number, onDelete } = this.props;
    return (
      <li className="contact-item" id={id}>
        {name}: {number} <button className="deleteBtn" onClick={onDelete}>Delete</button>
      </li>
    );
  }
}

export default ContactsListItem;
