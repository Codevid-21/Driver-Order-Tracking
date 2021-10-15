import React, { useState } from "react";
import ModalForDrivers from "./ModalForDrivers";
import { GiHotMeal } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";

function OrderCard({ orderInfo, callTheApi }) {
  const [modalShow, setModalShow] = useState(false);

  const [selectedOrder, setSelectedOrder] = useState({ driver: { _id: "" } });

  return (
    <>
      {orderInfo
        .map((order, i) => {
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
                <p>Order Name: {order.food}</p>
                <p className="date">{order.date}</p>
                {/* <p>Price: {order.total}€</p> */}
                <p>{order.total}€</p>
              </div>
              <div className="clientInfo">
                <h4>Client Information</h4>
                <p>Name: {order.customerId.user.name} </p>
                <p>Address: {order.customerId.user.address} </p>
                <p>Phone: {order.customerId.user.tel} </p>
              </div>
              <div className="driverInfo">
                <div className="img">
                  {order.isDelivered ? (
                    <GrCompliance />
                  ) : order.driver ? (
                    <FaShippingFast />
                  ) : (
                    <GiHotMeal />
                  )}
                </div>

                <p>
                  {order.driver === null
                    ? "There is no driver yet!"
                    : `Driver: ${order.driver.user.name}`}
                </p>
              </div>
            </div>
          );
        })
      }
      <div className="modalWindows">
        <ModalForDrivers
          callTheApi={callTheApi}
          show={modalShow}
          onHide={() => setModalShow(false)}
          selectedOrder={selectedOrder}
        />
      </div>
    </>
  );
}

export default OrderCard;
