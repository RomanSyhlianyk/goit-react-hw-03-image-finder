export const ImageGalleryItem = ({ images, openModal, imagesItemRef }) => {
  return images.map(({ id, webformatURL, largeImageURL }, idx, arr) => {
    // console.log(arr.length);
    return (
      <li
        ref={idx === arr.length - 11 ? imagesItemRef : null}
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
