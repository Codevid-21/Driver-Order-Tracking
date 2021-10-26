import React, { useEffect, useState } from "react";
import OrderCard from "../components/Orders/OrderCard.jsx";
import api from "../api/fetchDataFromDB.js";
import dotenv from "dotenv";
dotenv.config();

function Orders() {
  const [orderInfo, setOrderInfo] = useState([]);

  // MAIN
  const url = `/orders`;

  // DEV
  const url = `http://localhost:2005/orders`;

  useEffect(() => {
    api.fetchDataFromDB(url).then((result) => {
      const deliveredOrders = result.filter(
        (value, index) => value.isDelivered === true
      );
      setOrderInfo(deliveredOrders);
      console.log("useeffect orders.jsx")
    });
  }, [url]);
  return (
    <div>
      <OrderCard orderInfo={orderInfo} />
    </div>
  );
}

export default Orders;
