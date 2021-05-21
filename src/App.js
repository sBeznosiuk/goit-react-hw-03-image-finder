import React, { Component } from 'react';
import Button from './Components/Button';
import ImageGallery from './Components/ImageGallery';
import Spinner from './Components/Loader';
import Modal from './Components/Modal';
import Searchbar from './Components/Searchbar';
import { getImages, postImages } from './api/api';

class App extends Component {
  initialState = {
    query: '',
    data: [],
    page: 1,
    showModal: false,
    largeImage: '',
  };

  state = {
    ...this.initialState,
  };

  componentDidMount() {
    getImages(this.state.query, this.state.page)
      .then(({ data }) => this.setState({ data: data.hits }))
      .then(
        setTimeout(() => {
          console.log(this.state.data);
        }, 5000),
      );
    // .then(({ data }) => console.log(data.hits));
  }

  componentDidUpdate() {
    getImages(this.state.query, this.state.page)
      .then(({ data }) => this.setState({ data: data.hits }))
      .then(
        setTimeout(() => {
          console.log(this.state.data);
        }, 5000),
      );
  }

  onSubmit = query => {
    this.setState({ query: query });
    console.log(query);
  };

  toggleModal = () => {
    this.setState(({ showModal, largeImage }) => ({
      showModal: !showModal,
    }));
  };

  handleClick = item => {
    this.toggleModal();
    this.setState({ largeImage: item.largeImageURL });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          apiLink={this.apiLink}
          toggleModal={this.toggleModal}
          handleClick={this.handleClick}
          data={this.state.data}
          largeImage={this.state.largeImage}
        />
        <Button />
        <Spinner />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.largeImage} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
