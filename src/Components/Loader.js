import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { createPortal } from 'react-dom';

const loaderRoot = document.querySelector('#loader');

class Spinner extends Component {
  render() {
    return createPortal(
      <Loader
        type="Bars"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={10000}
      />,
      loaderRoot,
    );
  }
}

export default Spinner;
