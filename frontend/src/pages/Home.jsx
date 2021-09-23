import React, { useState, useEffect } from "react";
import OrderCard from "../components/OrderCard.jsx";

function Home() {
  const [orderInfo, setOrderInfo] = useState([]);

  const url = `http://localhost:2005/orders`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => setOrderInfo(jsonData.result))
      .catch((error) => console.log(error));
  }, []);

  console.log(orderInfo);

  // const orderInfo = [
  //   {_id : 500}, {_id : 500}, {_id : 500},
  // ]

  return (
    <div>
      <OrderCard orderInfo={orderInfo} />
    </div>
  );
}

export default Home;
