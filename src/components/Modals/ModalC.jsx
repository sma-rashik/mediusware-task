import React from "react";

const ModalC = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-header">
        <h5 className="modal-title">Modal C - Contact Details</h5>
        <button className="close" onClick={closeModal}>
          <span>&times;</span>
        </button>
      </div>
      <div className="modal-body">{/* Render contact details here */}</div>
    </div>
  );
};

export default ModalC;
