import React, { useState, useEffect } from "react";
import OrderCard from "../components/OrderCard.jsx";

function Home() {
  const [orderInfo, setOrderInfo] = useState([]);

  const url = "http://localhost:2023/orders";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => setOrderInfo(jsonData.result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <OrderCard orderInfo={orderInfo} />
    </div>
  );
}

export default Home;
