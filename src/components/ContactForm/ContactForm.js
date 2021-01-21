import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { contactName, onSubmit } = this.props;
    const { name, number } = this.state;
    contactName.filter((contact) => contact.name.toLowerCase() === name.toLowerCase()).length === 0
      ? onSubmit(name, number)
      : alert(`${name} is alredy in contacs`);
    this.setState({ name: "", number: "" });
  };

  render() {
    ContactForm.propTypes = {
      onSubmit: PropTypes.func,
      contactName: PropTypes.array,
    };

    const { name, number } = this.state;
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <label className="contact-label">
          Name
          <input
            className="contact-input"
            required
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label className="contact-label">
          Number
          <input
            className="contact-input"
            required
            type="text"
            placeholder="Enter number"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button className="submit-Btn" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
