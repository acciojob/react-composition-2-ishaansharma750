import React from 'react';

function Modal({ show, onClose, children }) {
  if (!show) {
    return null;
  }

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-dialog">
        <button className="modal-close" onClick={handleClose}>
          Close
        </button>
        <p>This is the content of the modal.</p>
        {children}
      </div>
    </div>
  );
}

export default Modal;
