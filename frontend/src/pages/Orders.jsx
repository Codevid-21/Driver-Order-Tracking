import React, { useEffect, useState } from "react";
import OrderCard from "../components/OrderCard.jsx";
import api from "../api/fetchDataFromDB.js";
import SearchSomething from "../components/SearchSomething.jsx";

function Orders() {
  const [orderInfo, setOrderInfo] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const callTheOrder = () => {
    const url = `http://localhost:2005/orders`;
    api.fetchDataFromDB(url).then((result) => {
      const deliveredOrders = result.filter(
        (value, index) => value.isDelivered === true
      );
      setOrderInfo(deliveredOrders.reverse());
    });
  };

  useEffect(() => {
    if (searchItem !== "") {
      const filteredOrders = orderInfo.filter((order) => {
        return Object.values(order.customerId.user)
          .join(" ")
          .toLowerCase()
          .includes(searchItem.toLowerCase());
      });

      setOrderInfo(filteredOrders);

      console.log(filteredOrders);
    } else {
      callTheOrder();
    }
  }, [searchItem]);

  return (
    <div>
      <SearchSomething searchItem={searchItem} setSearchItem={setSearchItem} />
      <OrderCard orderInfo={orderInfo} />
    </div>
  );
}

export default Orders;
