import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    value: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleInput = e => {
    const { value } = e.target;
    this.setState({ value: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleInput}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
