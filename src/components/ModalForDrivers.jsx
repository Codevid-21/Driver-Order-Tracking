import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import DriverCard from "./DriverCard";
import api from "../api/fetchDataFromDB";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dotenv from "dotenv";
dotenv.config();

function ModalForDrivers(props) {
  const [drivers, setDrivers] = useState([]);

  
  const callTheDriversApi = () => {
    
    // MAIN
<<<<<<< HEAD
    const url = `/drivers`;
=======
    // const url = `${process.env.REACT_APP_API_SERVER}/drivers`;
>>>>>>> 99a5ecba (url)
    
    // DEV
    const url = `http://localhost:2005/drivers`;
    
    api.fetchDataFromDB(url).then((result) => {
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
    // MAIN
    const url = `/orders/${props.selectedOrder._id}/${driver._id}`;
    
    // DEV
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
        const customId = "custom-id-assign";
        toast.success(" Driver Has Assigned to Order...", {
          toastId: customId,
        });
        // console.log(result);
      });
    props.onHide();
  };

  return (
    <>
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

      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
      />
    </>
  );
}

export default ModalForDrivers;
