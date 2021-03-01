import React, { useState, useContext } from "react";
import useUser from '../hooks/use-user'

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

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
    month,
    comments,
    property
  } = props;

  const { user } = useUser();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const alertshow = () => {
    alert("button clicked");
  };

  const rentalMonthNumeric = period.slice(5)


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
            <p>Property: {property}</p>
            <p>${amount} paid for {month} {period.slice(0,4)} rent on {date}</p>
            <p>{comments}</p>
            <p className="text-xs">Submitted by {user.username} and include a timestamp for when submitted</p> 
    
           
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