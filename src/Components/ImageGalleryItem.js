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

export default ImageGalleryItem;
