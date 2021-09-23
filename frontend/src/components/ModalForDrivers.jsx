import React from "react";
import { Modal, Button } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";

function ModalForDrivers(props) {
  const addDrivertoOrder = (driver) => {
    console.log("driver ekleme aktif");

    console.log(driver._id);

    fetch(`http://localhost:2005/drivers/${driver._id}`, {
      method: "PUT",
      body: JSON.stringify({ deliveries: props.selectedOrder }),
      headers: {
        "Content-type": "application/json", // The type of data you're sending
      },
    });
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
          {props.drivers.map((driver, i) => {
            return (
              <div
                className="driverCard"
                key={i}
                onClick={() => addDrivertoOrder(driver)}
              >
                <div className="driverPhoto">
                  <BsFillPersonFill size="2em" color="black" />
                </div>
                <driver className="info">
                  <p>Name : {driver.user.name} </p>
                  <p>Status : {driver.status} </p>
                </driver>
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Done</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalForDrivers;
