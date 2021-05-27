import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    handleClick: PropTypes.func.isRequired,
  };
  render() {
    return (
      <ul className="ImageGallery">
        {this.props.data.map(item => {
          return (
            <ImageGalleryItem
              key={item.id}
              id={item.id}
              user={item.user}
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
