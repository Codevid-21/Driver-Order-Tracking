import React, { useState, useEffect } from "react";
import OrderCard from "../components/OrderCard.jsx";
import api from "../api/fetchDataFromDB.js";

function Home() {
  const [orderInfo, setOrderInfo] = useState([]);

  const url = `http://localhost:2005/orders`;

  useEffect(() => {
    api.fetchDataFromDB(url)
      .then(result => setOrderInfo(result))
  }, [url]);


  return (
    <div>
      <OrderCard orderInfo={orderInfo} />
    </div>
  );
}

export default Home;
