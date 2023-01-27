import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images, openModal, imagesItemRef }) => {
  return images.map(({ id, webformatURL, largeImageURL }) => {
    // console.log(id);
    return (
      <li
        // ref={idx === arr.length - 11 ? imagesItemRef : null}
        className="ImageGalleryItem"
        onClick={e => {
          openModal(largeImageURL);
        }}
        key={id}
      >
        <img src={webformatURL} alt="" />
      </li>
    );
  });
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  openModal:PropTypes.func.isRequired,
};