import React, { useState, useEffect } from "react";
import OrderCard from "../components/Orders/OrderCard.jsx";
import api from "../api/fetchDataFromDB.js";
import dotenv from "dotenv";
dotenv.config();

function Home({ click }) {
  const [orderInfo, setOrderInfo] = useState([]);

  const callTheApi = () => {
    const url = `${process.env.REACT_APP_API_SERVER}/orders`;

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
