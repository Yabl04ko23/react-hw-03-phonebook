import React, { Component } from "react";
import PropTypes from "prop-types";

class Filter extends Component {
  render() {
    Filter.propTypes = {
      filterValue: PropTypes.string,
      changeFilter: PropTypes.func,
    };
    const { filterValue, changeFilter } = this.props;
    return (
      <div>
        <label className="contact-label">
          Find contacts by name
          <input
            className="contact-input"
            type="text"
            placeholder="Enter name"
            name="filter"
            value={filterValue}
            onChange={(e) => changeFilter(e.target.value)}
          />
        </label>
      </div>
    );
  }
}

export default Filter;
