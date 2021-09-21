import React, {useState, useEffect} from "react";

function OrderCard() {


  const [orderInfo, setOrderInfo] = useState([])


  const url = 'http://localhost:2005/orders';

  useEffect(() => {
      fetch(url).then((response) => {

          return response.json();
      }).then((jsonData) => {

          console.log(jsonData);
          setOrderInfo(jsonData)

      }).catch((error) => {

          console.log(error);
      });
  }, [orderInfo]);



  return (
    <>
      <div className="orderCard">
        <div className="orderInfo">
          <h5>Order Information</h5>
          <p> Order ID : 1234 </p>
          <p>Order Content : link </p>
          <p> Price : 10€ </p>
        </div>
        <div className="clientInfo">
          <h5>Client Information</h5>
          <p> Name : Uwe Smith </p>
          <p>Address : Elisabeth street 1 </p>
          <p> Phone : 0176 888 44 44 </p>
        </div>
        <div className="driverInfo">
          <img src="https://www.nicepng.com/png/detail/1010-10103271_chef-cook-cartoon-cute-kitchen-png-image-cooking.png" alt="" />
          <p>Driver :  </p>
        </div>
      </div>
    </>
  );
}

export default OrderCard;
