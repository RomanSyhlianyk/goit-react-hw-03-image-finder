import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal, imagesItemRef }) => {
  // const ref = useRef();

  return (
    <ul className="ImageGallery">
      <ImageGalleryItem
        images={images}
        openModal={openModal}
        imagesItemRef={imagesItemRef}
      />
    </ul>
  );
};
