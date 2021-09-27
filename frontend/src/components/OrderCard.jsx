import React, { useState, useEffect } from "react";
import ModalForDrivers from "./ModalForDrivers";
import api from "../api/fetchDataFromDB";

function OrderCard({ orderInfo }) {
  const [modalShow, setModalShow] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const url = `http://localhost:2005/drivers`;

  useEffect(() => {
    api.fetchDataFromDB(url).then((result) => setDrivers(result));
    console.log(drivers);
  }, [url]);

  return (
    <>
      {orderInfo.map((order, i) => {
        return (
          <div
            key={i}
            className="orderCard"
            onClick={() => {
              setModalShow(true);
              setSelectedOrder(order);
            }}
          >
            <div className="orderInfo">
              <h4>Order Information</h4>
              <p> Order ID : {order._id} </p>
              <p>Order Content : {order.detail} </p>
              <p> Price : {order.price}€ </p>
            </div>
            <div className="clientInfo">
              <h4>Client Information</h4>
              <p> Name : Uwe Smith </p>
              <p>Address : Elisabeth street 1 </p>
              <p> Phone : 0176 888 44 44 </p>
            </div>
            <div className="driverInfo">
              <img
                src="https://www.nicepng.com/png/detail/1010-10103271_chef-cook-cartoon-cute-kitchen-png-image-cooking.png"
                alt=""
              />
              <p>Driver :{order.driver ? order.driver : "Not"}</p>
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
