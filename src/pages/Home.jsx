import React, { useState, useEffect } from "react";
import OrderCard from "../components/Orders/OrderCard.jsx";
import api from "../api/fetchDataFromDB.js";
import dotenv from "dotenv";
import NoOrdersToDisplay from "../components/NoOrdersToDisplay.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { io } from "socket.io-client";
dotenv.config();

let socket = io("http://localhost:2005");
// let socket = io("https://order-driver-tracking.herokuapp.com:2006");
// let socket = io();

const INITIAL_OBJEKT = [{
  "_id": "617918390821e3d61bcb2f54",
  "foods": [
    {
      "category": "desert",
      "name": "Eis",
      "description": "zubereitet mit natürlichen Früchten",
      "price": "5€",
      "image": "https://cdn.pixabay.com/photo/2017/05/11/19/34/ice-2305159_960_720.jpg",
      "count": 6
    },
    {
      "category": "salat",
      "name": "Grüner",
      "description": "Salatmix mit Cherry Tomaten, Gurken, Oliven",
      "price": "13€",
      "image": "https://cdn.pixabay.com/photo/2015/05/31/13/59/salad-791891_960_720.jpg",
      "count": 4
    },
    {
      "category": "salat",
      "name": "Peporoni",
      "description": "Weißkraut und Karotten in einem Salatdressing",
      "price": "9€",
      "image": "https://cdn.pixabay.com/photo/2017/05/04/19/33/rice-noodles-2284949_960_720.jpg",
      "count": 6
    },
    {
      "category": "desert",
      "name": "Donut",
      "description": "Schoko Donut mt Milka Enzelpack",
      "price": "7€",
      "image": "https://cdn.pixabay.com/photo/2018/09/16/07/22/donut-3680831_960_720.jpg",
      "count": 4
    },
    {
      "category": "salat",
      "name": "Caesar",
      "description": "Salatmix mit Croutons und Parmesan Käse, Tomaten",
      "price": "6€",
      "image": "https://cdn.pixabay.com/photo/2021/02/06/15/11/caesar-5988435_960_720.jpg",
      "count": 2
    },
    {
      "category": "desert",
      "name": "Muffin",
      "description": "Schoko Muffin mit Milka Einzelpack",
      "price": "8€",
      "image": "https://cdn.pixabay.com/photo/2019/09/21/13/19/mufiin-4493905_960_720.jpg",
      "count": 3
    },
    {
      "category": "burger",
      "name": "Cheeseburger",
      "description": "mit Salat, Cheddar, frischen Zwiebeln, eingelegten Gurken",
      "price": "12€",
      "image": "https://cdn.pixabay.com/photo/2017/09/18/16/53/burger-2762371_960_720.jpg",
      "count": 3
    },
    {
      "category": "burger",
      "name": "Hamburger",
      "description": "Double Burger (ca. 260g) mit Rucola, Frischen Zwiebeln,",
      "price": "12€",
      "image": "https://cdn.pixabay.com/photo/2017/12/09/23/04/bread-3008950_960_720.jpg",
      "count": 2
    },
    {
      "category": "burger",
      "name": "Tripleburger",
      "description": "mit Salat, Cheddar, gebratenen Zwiebeln, frischen Gurken,",
      "price": "10€",
      "image": "https://cdn.pixabay.com/photo/2016/03/26/23/19/hamburger-1281855_960_720.jpg",
      "count": 2
    }
  ],
  "date": "2021-10-27T09:13:29.797Z",
  "customerId": {
    "_id": "617918390821e3d61bcb2f52",
    "user": {
      "_id": "617918390821e3d61bcb2f50",
      "name": "Keyshawn",
      "surname": "Koelpin",
      "email": "Antonio.Yundt@yahoo.com",
      "tel": "12341234",
      "address": "7664 Pierce Flats",
      "city": "Rosalynmouth"
    },
    "orders": [],
    "__v": 0
  },
  "total": "test",
  "driver": null,
  "isDelivered": false
}]

function Home({ click }) {
  console.log("home hat sich gerendert");
  const [orderInfo, setOrderInfo] = useState(() => INITIAL_OBJEKT);

  const socketFunc = (order) => {
    console.log("order on socket", order)
    console.log("orderInfo on socket", orderInfo)
    console.log("setorder", [order, ...orderInfo])
    setOrderInfo((prevOrderInfo) => [order, ...prevOrderInfo]);
    const customId = "custom-id-newOrder";
    toast.info("You have a new Order..", {
      toastId: customId,
    });
  }

  const callTheApi = () => {
    // MAIN
    // const url = `/orders`;

    // DEV
    const url = `http://localhost:2005/orders`;

    api.fetchDataFromDB(url).then((result) => {
      const deliveredOrders = result.filter(
        (value, index) => value.isDelivered === false
      );
      setOrderInfo(deliveredOrders.reverse());
    });
  };

  useEffect(() => {
    console.log("useeffect")
    callTheApi();
  }, []);

  useEffect(() => {
    console.log("nach call the api", orderInfo);
    socket.on("test", (data) => {
      console.log("test data", data);
    })
    socket.on('cart', (order) => {
      socketFunc(order);
      console.log("socket socket");
    });
  }, []);

  return (
    <div className={!click ? "hideOrder" : "displayOrder"}>
      {orderInfo.length === 0 ?
        (
          <NoOrdersToDisplay />
        )
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
    </div>
  );
}

export default Home;
