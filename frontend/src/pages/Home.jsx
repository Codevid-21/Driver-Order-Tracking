import React, { useState, useEffect } from "react";
import OrderCard from "../components/OrderCard.jsx";
import api from "../api/fetchDataFromDB.js";

function Home({ click }) {
  const [orderInfo, setOrderInfo] = useState([]);

  const callTheApi = () => {
    const url = `http://localhost:2005/orders`;

    api.fetchDataFromDB(url).then((result) => {
      const deliveredOrders = result.filter(
        (value, index) => value.isDelivered === false
      );
      setOrderInfo(deliveredOrders.reverse());
    });
  };

  useEffect(() => {
    callTheApi();
  }, []);

  return (
    <div className={!click ? "hideOrder" : "displayOrder"}>
      {orderInfo.length === 1
        ?
        "orderInfo bos buraya bos komponent eklenecek"
        :
        (
          <OrderCard orderInfo={orderInfo} callTheApi={callTheApi} />
        )
      }
    </div>
  );
}

export default Home;
