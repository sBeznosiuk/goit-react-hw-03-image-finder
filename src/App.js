import React, { Component } from 'react';
import Button from './Components/Button';
import ImageGallery from './Components/ImageGallery';
import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Modal from './Components/Modal';
import Searchbar from './Components/Searchbar';
import getImages from './api/api';

class App extends Component {
  initialState = {
    query: '',
    data: [],
    page: 1,
    perPage: 12,
    largeImage: '',
    showLoader: false,
    showModal: false,
  };

  state = {
    ...this.initialState,
  };

  componentDidUpdate(prevProps, prevState) {
    prevState.query !== this.state.query && this.fetchImages();
  }

  fetchImages = () => {
    const { query, page, perPage } = this.state;

    this.setState({ showLoader: true });

    getImages(query, perPage, page)
      .then(res => {
        this.setState(({ data, page }) => ({
          data: [...data, ...res],
          page: page + 1,
        }));
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ showLoader: false }));
  };

  onSubmit = query => {
    this.setState({ query: query, page: 1, data: [] });
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

  render() {
    const { data, showLoader, showModal } = this.state;
    return (
      <section className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {!!data.length && (
          <ImageGallery
            toggleModal={this.toggleModal}
            handleClick={this.handleClick}
            data={data}
          />
        )}

        {showLoader && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.largeImage} alt="" />
          </Modal>
        )}

        {!!data.length && !showLoader && (
          <Button handleLoadMoreButton={this.fetchImages} />
        )}
      </section>
    );
  }
}

export default App;
