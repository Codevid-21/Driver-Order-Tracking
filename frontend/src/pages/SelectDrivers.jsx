import React, { useState, useEffect } from "react";
import api from "../api/fetchDataFromDB.js";
import SelectedDrivers from "../components/SelectedDrivers.jsx";

function SelectDrivers() {
  const [drivers, setDrivers] = useState([]);
  const [checked, setChecked] = useState(false);

  const url = `http://localhost:2005/drivers`;

  useEffect(() => {
    api.fetchDataFromDB(url).then((result) => {
      setDrivers(result);
    });
  }, [url]);


  const handleDrivers = (e) => {
    e.preventDefault();

    console.log(drivers);
  };

  return (
    <div>
      <form onSubmit={handleDrivers}>
        {drivers.map((value, i) => {
          value.isWorking = checked;
          return (
            <div key={i}>
              <SelectedDrivers
                name={value.user.name}
                _id={value._id}
                checked={checked}
                setChecked={setChecked}
              />
            </div>
          );
        })}

        <button type="submit"> Onayla </button>
      </form>
    </div>
  );
}

export default SelectDrivers;
