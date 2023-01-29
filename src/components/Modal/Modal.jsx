import PropTypes from 'prop-types';
import { Component } from 'react';

export class Modal extends Component {
  handleClick = event => {
    if (event.target.className !== 'Overlay') return;
    this.props.closeModal();
  };

  closeModalByPressingEscape = event => {
    if (event.key !== 'Escape') return;
    this.props.closeModal();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeModalByPressingEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalByPressingEscape);
  }

  render() {
    return (
      <div className="Overlay" onClick={this.handleClick}>
        <div className="Modal">
          <img src={this.props.modalUrl} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalUrl: PropTypes.string.isRequired,
};
