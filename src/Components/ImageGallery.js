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
              toggleModal={this.props.toggleModal}
            >
              <img
                src={item.webformatURL}
                alt=""
                className="ImageGalleryItem-image"
                onClick={() => this.props.handleClick(item)}
              />
            </ImageGalleryItem>
          );
        })}
      </ul>
    );
  }
}

export default ImageGallery;
