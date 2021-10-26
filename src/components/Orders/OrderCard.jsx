import React, { useState } from "react";
import ModalForDrivers from "../ModalForDrivers";
import ModalForOrders from "../Orders/ModalForOrders";
import OrderInfo from "./OrderInfo";
import ClientInfo from "./ClientInfo";
import DriverInfo from "./DriverInfo";

function OrderCard({ orderInfo, callTheApi }) {
  
  const INITIAL_ORDER = { driver: { _id: "" }};
  const [modalShow, setModalShow] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(INITIAL_ORDER);
  
  const [orderModalShow, setOrderModalShow] = useState(false);
  return (
    <>
      {orderInfo
        .map((order, i) => {
          return (
            <div key={i} className="orderCard">
              <OrderInfo order={order} setOrderModalShow={setOrderModalShow} setSelectedOrder={setSelectedOrder} />
              <ClientInfo order={order} />
              <DriverInfo order={order} setModalShow={setModalShow} setSelectedOrder={setSelectedOrder} />
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
      <div className="modalWindows">
        <ModalForOrders
          show={orderModalShow}
          onHide={() => setOrderModalShow(false)}
          selectedOrder={selectedOrder}
        />
      </div>
    </>
  );
}

export default OrderCard;
