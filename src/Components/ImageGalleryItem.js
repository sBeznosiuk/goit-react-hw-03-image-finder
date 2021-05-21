import React from 'react';

const ImageGalleryItem = ({ children, largeImage }) => {
  return (
    <li className="ImageGalleryItem" largeImage={largeImage}>
      {children}
    </li>
  );
};

export default ImageGalleryItem;
