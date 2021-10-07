import React, { useState, useEffect } from "react";
import ModalForDrivers from "./ModalForDrivers";
import api from "../api/fetchDataFromDB";

function OrderCard({ orderInfo }) {
  const [modalShow, setModalShow] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState({ driver: { _id: "" } });

  const url = `http://localhost:2005/drivers`;

  useEffect(() => {
    api.fetchDataFromDB(url).then((result) => {
      const workingDrivers = result.filter(
        (value, index) => value.isWorking === true
      );
      setDrivers(workingDrivers);
    });
  }, [url]);

  return (
    <>
      {orderInfo.map((order, i) => {
        return (
          <div
            key={i}
            className="orderCard"
            onClick={
              order.isDelivered
                ? () => null
                : () => {
                    setModalShow(true);
                    setSelectedOrder(order);
                  }
            }
          >
            <div className="orderInfo">
              <h4>Order Information</h4>
              <p> Order ID : {order._id} </p>
              <p>Order Date : {order.date} </p>
              <p> Price : {order.total}€ </p>
            </div>
            <div className="clientInfo">
              <h4>Client Information</h4>
              <p> Name : {order.customerId.user.name} </p>
              <p>Address : {order.customerId.user.address} </p>
              <p> Phone : {order.customerId.user.tel} </p>
            </div>
            <div className="driverInfo">
              <img
                src="https://www.nicepng.com/png/detail/1010-10103271_chef-cook-cartoon-cute-kitchen-png-image-cooking.png"
                alt=""
              />
              <p>
                Driver :{" "}
                {order.driver === null ? "No Driver " : order.driver.user.name}
              </p>
            </div>
          </div>
        );
      })}

      <div className="modalWindows">
        <ModalForDrivers
          show={modalShow}
          onHide={() => setModalShow(false)}
          drivers={drivers}
          selectedOrder={selectedOrder}
        />
      </div>
    </>
  );
}

export default OrderCard;
