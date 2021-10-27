import React, { useEffect, useState } from "react";
import OrderCard from "../components/Orders/OrderCard.jsx";
import api from "../api/fetchDataFromDB.js";
import NoOrdersToDisplay from "../components/NoOrdersToDisplay.jsx";
import SearchSomething from "../components/SearchSomething.jsx";
import dotenv from "dotenv";
dotenv.config();

function Orders() {
  const [orderInfo, setOrderInfo] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  // MAIN
  // const url = `/orders`;

  // DEV
  const url = `http://localhost:2005/orders`;

  useEffect(() => {
    api.fetchDataFromDB(url).then((result) => {
      const deliveredOrders = result.filter(
        (value, index) => value.isDelivered === true
      );
      setOrderInfo(deliveredOrders);
    });
  }, [url]);

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
    } 
    else {
      api.fetchDataFromDB(url).then((result) => {
        const deliveredOrders = result.filter(
          (value, index) => value.isDelivered === true
        );
        setOrderInfo(deliveredOrders);
      });
    }
  }, [searchItem]);

  return (
    <div>
      <SearchSomething searchItem={searchItem} setSearchItem={setSearchItem} />
      {orderInfo.length === 0 ?
        (
          <NoOrdersToDisplay />
        )
        :
        (
          <div>
            <OrderCard orderInfo={orderInfo} />
          </div>
        )
      }
    </div>
  );
}

export default Orders;
