import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { useRef } from 'react';
import { useEffect } from 'react';

export const ImageGallery = ({
  images,
  openModal,
  imagesItemRef,
 
}) => {
  // const ref = useRef();

  

 
  return (
    <ul className="ImageGallery" >
      <ImageGalleryItem
        images={images}
        openModal={openModal}
        imagesItemRef={imagesItemRef}
      />
    
    </ul>
  );
};
