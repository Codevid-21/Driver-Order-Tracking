import React from "react";
import { Modal, Button } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import DriverCard from "./DriverCard";

function ModalForDrivers(props) {

  const addDrivertoOrder = (driver) => {
    // Burada hem driver hem de order güncelleniyor.
    const url = `http://localhost:2005/orders/${props.selectedOrder._id}/${driver._id}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json", // The type of data you're sending
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => console.log("Güncellenmis Driver", result));

    props.onHide();
  };

  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Select a Driver
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            props.selectedOrder.driver == null ?

              props.drivers.map((driver, i) => {
                return (
                  <DriverCard driver={driver} key={i} addDrivertoOrder={addDrivertoOrder} />
                );
              })
              :
              props.drivers.filter(value => value._id !== props.selectedOrder.driver._id).map((driver, i) => {
                return (
                  <DriverCard driver={driver} key={i} addDrivertoOrder={addDrivertoOrder} />
                );
              })
          }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Done</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalForDrivers;
