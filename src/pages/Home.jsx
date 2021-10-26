import React, { useState, useEffect } from "react";
import OrderCard from "../components/Orders/OrderCard.jsx";
import api from "../api/fetchDataFromDB.js";
import dotenv from "dotenv";
import NoOrdersToDisplay from "../components/NoOrdersToDisplay.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { io } from "socket.io-client";
dotenv.config();

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

  let socket = io("http://localhost:2006");

  socket.on('cart', function (order) {
    setOrderInfo([order, ...orderInfo]);
    const customId = "custom-id-newOrder";
    console.log("socket socket");
    toast.info("You have a new Order..", {
      toastId: customId,
    });
  });

  return (
    <div className={!click ? "hideOrder" : "displayOrder"}>
<<<<<<< HEAD
      {orderInfo.length === 0 ? (
        <NoOrdersToDisplay/>
      ) : (
        <OrderCard orderInfo={orderInfo} callTheApi={callTheApi} />
      )}
=======
      {orderInfo.length === 1
        ?
        "orderInfo bos buraya bos komponent eklenecek"
        :
        (
          <OrderCard orderInfo={orderInfo} callTheApi={callTheApi} />
        )
      }
      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
      />
>>>>>>> feature/socket.io
    </div>
  );
}

export default Home;
