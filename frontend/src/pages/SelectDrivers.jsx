import React, { useState, useEffect } from "react";
import api from "../api/fetchDataFromDB.js";
import IsDriverWorking from "../components/IsDriverWorking.jsx";

function SelectDrivers() {
  const [drivers, setDrivers] = useState([]);

  const url = `http://localhost:2005/drivers`;

  useEffect(() => {
    api.fetchDataFromDB(url).then((result) => {
      setDrivers(result);
    });
  }, [url]);

  return (
    <div className="allDrivers__container">
      <IsDriverWorking drivers={drivers} isWorking={true} />
      <IsDriverWorking drivers={drivers} isWorking={false} />
    </div>
  );
}

export default SelectDrivers;
