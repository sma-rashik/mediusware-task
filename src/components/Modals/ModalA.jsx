import React, { useState, useEffect } from "react";

const ModalA = ({
  closeModal,
  handleContactItemClick,
  handleSearchInputChange,

  page,
}) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, [page]);

  const fetchContacts = async () => {
    try {
      const response = await fetch(
        `https://contact.mediusware.com/api/contacts/?format=json`
      );
      const data = await response.json();
      setContacts((prevContacts) => [...prevContacts, ...data.results]);
    } catch (error) {
      console.log("Error fetching contacts:", error);
    }
  };

  return (
    <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal A - All Contacts</h5>
            <button className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              onChange={handleSearchInputChange}
            />
            <ul className="contact-list">
              {contacts.map((contact) => (
                <li key={contact.id} onClick={handleContactItemClick}>
                  <h1 className="text-bg-dark"> {contact.name}</h1>
                </li>
              ))}
            </ul>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalA;
