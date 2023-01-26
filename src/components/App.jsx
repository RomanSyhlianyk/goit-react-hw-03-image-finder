import { createRef } from 'react';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { getImagesApi } from 'utils/imagesApi';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    error: null,
    loader: false,
    page: 1,
    isModalOpen: false,
    modalUrl: '',
  };

  imagesItemRef = createRef();

  openModal = url => {
    this.setState({ isModalOpen: true, modalUrl: url });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  changeQuery = query => {
    this.setState({ query });
    this.setState({ page: 1 });
  };

  loadNextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ loader: true });
      try {
        const { query, page } = this.state;
        const dataImages = await getImagesApi(query, page);

        this.setState({ images: dataImages.data.hits });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loader: false });
      }
    } else if (prevState.page !== this.state.page) {
      this.setState({ loader: true });
      try {
        const { query, page } = this.state;
        const dataImages = await getImagesApi(query, page);
        // console.log(dataImages);
        this.setState(prev => ({
          images: [...prev.images, ...dataImages.data.hits],
        }));
        //
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loader: false });
      }
    }
    // console.log(this.imagesItemRef.current);
    // this.imagesItemRef.current?.scrollIntoView({ block: 'start' });
  }

  render() {
    const { images, error, loader, query, isModalOpen, modalUrl } = this.state;
    if (error) return <h1>{error}</h1>;

    return (
      <>
        <Searchbar onSubmit={this.changeQuery} />
        {loader === true && <Loader/>}
        {query !== '' && (
          <ImageGallery
            images={images}
            openModal={this.openModal}
            imagesItemRef={this.imagesItemRef}
          />
        )}
        {images.length > 0 && <Button onClick={this.loadNextPage} />}
        {isModalOpen && (
          <Modal
            images={images}
            closeModal={this.closeModal}
            modalUrl={modalUrl}
          />
        )}
      </>
    );
  }
}
