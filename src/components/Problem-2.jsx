import React, { useState } from "react";
import ModalA from "./Modals/ModalA";
import ModalB from "./Modals/ModalB";
import ModalC from "./Modals/ModalC";

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [showModalC, setShowModalC] = useState(false);

  const openModalA = () => {
    setShowModalA(true);
  };

  const openModalB = () => {
    setShowModalB(true);
  };

  const closeModalA = () => {
    setShowModalA(false);
  };

  const closeModalB = () => {
    setShowModalB(false);
  };

  const closeModalC = () => {
    setShowModalC(false);
  };

  const handleContactItemClick = () => {
    setShowModalC(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={openModalA}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={openModalB}
          >
            US Contacts
          </button>
        </div>
      </div>

      {showModalA && (
        <ModalA
          closeModal={closeModalA}
          handleContactItemClick={handleContactItemClick}
        />
      )}

      {showModalB && (
        <ModalB
          closeModal={closeModalB}
          handleContactItemClick={handleContactItemClick}
        />
      )}

      {showModalC && <ModalC closeModal={closeModalC} />}
    </div>
  );
};

export default Problem2;
