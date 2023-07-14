
import React, { useState } from "react";
import './../styles/App.css';
import Modal from "./Model";

const App = () => {

  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => {
    setModalShow(false);
  };

  return (
    <div>
        <button className="open-btn" onClick={() => setModalShow(true)}>Show Modal</button>
        <Modal show={modalShow} onClose={handleModalClose}>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  )
}

export default App