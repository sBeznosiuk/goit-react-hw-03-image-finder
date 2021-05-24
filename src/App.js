import React, { Component } from 'react';
import Button from './Components/Button';
import ImageGallery from './Components/ImageGallery';
import Spinner from './Components/Loader';
import Modal from './Components/Modal';
import Searchbar from './Components/Searchbar';
import getImages from './api/api';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  initialState = {
    query: '',
    data: [],
    page: 1,
    perPage: 12,
    showModal: false,
    largeImage: '',
    showLoader: true,
  };

  state = {
    ...this.initialState,
  };

  componentDidUpdate() {
    getImages(this.state.query, this.state.perPage).then(({ data }) =>
      this.setState({ data: data.hits }),
    );

    this.state.showLoader && this.setState({ showLoader: false });
  }

  onSubmit = query => {
    this.state.query !== query && this.setState({ perPage: 12 });
    this.setState({ query: query });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleClick = item => {
    this.toggleModal();
    this.setState({ largeImage: item.largeImageURL });
  };

  handleLoadMoreButton = () => {
    const { query, perPage } = this.state;

    getImages(query, perPage).then(res => {
      this.setState(({ data, perPage }) => ({
        data: [...data, res.data.hits],
        perPage: perPage + 12,
      }));
    });
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
        {!!this.state.data.length && (
          <Button handleLoadMoreButton={this.handleLoadMoreButton} />
        )}
        {this.state.showLoader && <Spinner />}
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
