import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import DriverCard from "./DriverCard";
import api from "../api/fetchDataFromDB";

function ModalForDrivers(props) {
  const [drivers, setDrivers] = useState([]);

  
  const callTheDriversApi = () => {
    const url = `http://localhost:2005/drivers`;
    api.fetchDataFromDB(url).then((result) => {
      console.log("callthedriversapi", result)
      const workingDrivers = result.filter(
        (value, index) => value.isWorking === true
      );
      setDrivers(workingDrivers);
    });
  }
  useEffect(() => {
    callTheDriversApi();
  }, []);

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
      .then((result) => {
        props.callTheApi();
        console.log(result);
      });
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
          {props.selectedOrder.driver == null
            ? drivers.map((driver, i) => {
              return (
                <DriverCard
                  driver={driver}
                  key={i}
                  addDrivertoOrder={addDrivertoOrder}
                />
              );
            })
            : drivers
              .filter((value) => value._id !== props.selectedOrder.driver._id)
              .map((driver, i) => {
                return (
                  <DriverCard
                    driver={driver}
                    key={i}
                    addDrivertoOrder={addDrivertoOrder}
                  />
                );
              })}
        </Modal.Body>
        <Modal.Footer>
          <Button size="lg" onClick={props.onHide}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalForDrivers;
