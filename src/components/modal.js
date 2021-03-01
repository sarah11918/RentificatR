import React, { useState } from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

// NOTICE
// Modal is brought in with it's own trigger, so import the component where you want the trigger to be.


export default function ModalComponent(props) {
  const {
    buttonText,
    title,
    actionButtonText,
    cancelButtonText,
    children,
    amount,
    period,
    date,
    comments,
    property
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const alertshow = () => {
    alert("button clicked");
  };


  return (
    <div className="bg-blue-400 rounded w-3/4 mx-auto mt-3 text-white text-sm font-bold py-1 text-center cursor-pointer mb-4">
      <div onClick={toggle}>{buttonText}</div>
      <Modal isOpen={modal} toggle={toggle} className="text-center">
        <form onSubmit={alertshow}>
          <ModalHeader className=" text-2xl border-0" >
            {title}
          </ModalHeader>
          <ModalBody className="text-center text-lg border-0 mb-3">
            <p className="modal-label">Please ensure the following details are correct</p>
            <p>{property}</p>
            <p>${amount} for {period} rent on {date}</p>
            <p>{comments}</p>
    
           
            {children}
          </ModalBody>
          <ModalFooter className="modal-footer border-0">
            <Button className="btn_secondary modal-btn" onClick={toggle}>
              {cancelButtonText}
            </Button>{" "}
            &nbsp;&nbsp;
            <input
              className="btn btn_primary modal-btn"
              type="submit"
              value={actionButtonText}
            />
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
};