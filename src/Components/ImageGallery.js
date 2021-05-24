import React, { PureComponent } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends PureComponent {
  render() {
    return (
      <ul className="ImageGallery">
        {this.props.data.map(item => {
          return (
            <ImageGalleryItem
              key={item.id}
              id={item.id}
              webformatURL={item.webformatURL}
              handleClick={() => this.props.handleClick(item)}
            />
          );
        })}
      </ul>
    );
  }
}

export default ImageGallery;
