import React, { Component } from 'react';

class Button extends Component {
  componentDidMount() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <button
        className="Button"
        type="button"
        onClick={this.props.handleLoadMoreButton}
      >
        Load more
      </button>
    );
  }
}

export default Button;
