import PropTypes from 'prop-types';

export const Modal = ({ closeModal, modalUrl }) => {
  console.log(modalUrl);
  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={modalUrl} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalUrl:PropTypes.string.isRequired,
};
