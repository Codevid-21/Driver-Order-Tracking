import React, { useEffect, useState } from "react";
import OrderCard from "../components/Orders/OrderCard.jsx";
import api from "../api/fetchDataFromDB.js";
import NoOrdersToDisplay from "../components/NoOrdersToDisplay.jsx";
import SearchSomething from "../components/SearchSomething.jsx";

function Orders({click}) {
  const [orderInfo, setOrderInfo] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  // MAIN
  const url = `/orders`;

  // DEV
  // const url = `http://localhost:2005/orders`;

  const getOrderData = () => {
    api.fetchDataFromDB(url).then((result) => {
      const deliveredOrders = result.filter(
        (value, index) => value.isDelivered === true
      );
      setOrderInfo(deliveredOrders);
    });

  }
  useEffect(() => {
    getOrderData();
  }, []);

  useEffect(() => {
    if (searchItem !== "") {
      const filteredOrders = orderInfo.filter((order) => {
        return Object.values(order.customerId.user)
          .join(" ")
          .toLowerCase()
          .includes(searchItem.toLowerCase());
      });
      setOrderInfo(filteredOrders);
    } 
    else {
      getOrderData();
    }
  }, [searchItem]);

  return (
    <div className={click && "hide"}>
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
