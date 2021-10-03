import React from "react";
import { Modal, Button } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";

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
                <div className="info">
                  <p>Name : {driver.user.name} </p>
                  <p>Status : {driver.status} </p>
                </div>
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
