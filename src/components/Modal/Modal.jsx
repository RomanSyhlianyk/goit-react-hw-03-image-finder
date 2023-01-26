export const Modal = ({ images, closeModal, modalUrl }) => {
    
    return (
      
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={modalUrl} alt="" />
      </div>
    </div>
  );
};

