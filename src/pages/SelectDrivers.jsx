import React, { useState, useEffect } from "react";
import api from "../api/fetchDataFromDB.js";
import IsDriverWorking from "../components/IsDriverWorking.jsx";
import dotenv from "dotenv";
dotenv.config();

function SelectDrivers() {
  const [drivers, setDrivers] = useState([]);

  const callTheDriversApi = () => {
    const url = `${process.env.REACT_APP_API_SERVER}/drivers`;
    // const url = `${process.env.REACT_APP_API_SERVER}/drivers`;

    api.fetchDataFromDB(url).then((result) => {
      setDrivers(result);
      console.log("useeffect selectdrivers.jsx");
    });
  };

  useEffect(() => {
    callTheDriversApi();
  }, []);

  return (
    <div className="allDrivers__container">
      <IsDriverWorking
        drivers={drivers}
        isWorking={true}
        setDrivers={setDrivers}
        callTheDriversApi={callTheDriversApi}
      />
      <IsDriverWorking
        drivers={drivers}
        isWorking={false}
        setDrivers={setDrivers}
        callTheDriversApi={callTheDriversApi}
      />
    </div>
  );
}

export default SelectDrivers;
