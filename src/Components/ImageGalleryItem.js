import PropTypes from 'prop-types';
import React from 'react';

const ImageGalleryItem = ({ webformatURL, handleClick, user }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={user}
        className="ImageGalleryItem-image"
        onClick={handleClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
