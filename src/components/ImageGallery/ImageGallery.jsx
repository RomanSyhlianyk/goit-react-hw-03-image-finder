import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
  // const ref = useRef();

  return (
    <ul className="ImageGallery">
      <ImageGalleryItem
        images={images}
        openModal={openModal}
        // imagesItemRef={imagesItemRef}
      />
    </ul>
  );
};

ImageGallery.propTypes = {
  images:PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};
