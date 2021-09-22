import React, { useState, useEffect } from "react";
import ModalForDrivers from "./ModalForDrivers";

function OrderCard({ orderInfo }) {
  const [modalShow, setModalShow] = React.useState(false);

  const [drivers, setDrivers] = useState([]);

  const url = `http://localhost:2005/users`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        const result = jsonData.result.filter(data => data.role === "Driver");
        setDrivers(result)})
      .catch((error) => console.log(error))
  }, []);

  // drivers.map(driver => {
  //   const abc = users.filter(user => user._id == driver.userID)
  //   driver.name = abc[0].name;
  // })

  return (
    <>
      {orderInfo.map((order, i) => {
        return (
          <div key={i} className="orderCard" onClick={() => setModalShow(true)}>
            <div className="orderInfo">
              <h4>Order Information</h4>
              <p> Order ID : {order._id} </p>
              <p>Order Content : {order.detail} </p>
              <p> Price : {order.price}€ </p>
            </div>
            <div className="clientInfo">
              <h4>Client Information</h4>
              <p> Name : Uwe Smith </p>
              <p>Address : Elisabeth street 1 </p>
              <p> Phone : 0176 888 44 44 </p>
            </div>
            <div className="driverInfo">
              <img
                src="https://www.nicepng.com/png/detail/1010-10103271_chef-cook-cartoon-cute-kitchen-png-image-cooking.png"
                alt=""
              />
              <p>Driver :{order.driver ? order.driver : "Not"}</p>
            </div>
          </div>
        );
      })}

      <div className="modalWindows">

        <ModalForDrivers
          show={modalShow}
          onHide={() => setModalShow(false)}
          drivers={drivers}
        />
      </div>
    </>
  );
}

export default OrderCard;
