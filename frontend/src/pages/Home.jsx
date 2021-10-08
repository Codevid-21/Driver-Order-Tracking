import React, { useState, useEffect } from "react";
import OrderCard from "../components/OrderCard.jsx";
import api from "../api/fetchDataFromDB.js";

function Home({ click }) {
  const [orderInfo, setOrderInfo] = useState([]);

  const url = `http://localhost:2005/orders`;

  useEffect(() => {
    api.fetchDataFromDB(url).then((result) => {
      const deliveredOrders = result.filter(
        (value, index) => value.isDelivered === false
      );
      setOrderInfo(deliveredOrders.reverse());
    });
  }, [url, orderInfo]);

  return (
    <div className={!click ? "hideOrder" : "displayOrder"}>
      <OrderCard orderInfo={orderInfo} />
    </div>
  );
}

export default Home;
