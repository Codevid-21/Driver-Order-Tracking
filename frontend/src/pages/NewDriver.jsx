import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewDriver() {
  let history = useHistory();

  const [newDriversInfo, setNewDriversInfo] = useState({
    name: "",
    surname: "",
    email: "",
    tel: "",
    address: "",
    city: "",
  });

  const addANewDriver = (e) => {
    e.preventDefault();

    fetch("http://localhost:2005/drivers", {
      method: "POST",
      body: JSON.stringify(newDriversInfo),
      headers: {
        "Content-type": "application/json", // The type of data you're sending
      },
    });

    history.push("/");
  };

  return (
    <div className="newDriver__container">
      <form onSubmit={addANewDriver} autoComplete="off">
        <h2>Add a new Driver</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newDriversInfo.name}
            onChange={(e) =>
              setNewDriversInfo({ ...newDriversInfo, name: e.target.value })
            }
          />
        </label>
        <label>
          Surname:
          <input
            type="text"
            name="surname"
            value={newDriversInfo.surname}
            onChange={(e) =>
              setNewDriversInfo({ ...newDriversInfo, surname: e.target.value })
            }
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={newDriversInfo.email}
            onChange={(e) =>
              setNewDriversInfo({ ...newDriversInfo, email: e.target.value })
            }
          />
        </label>
        <label>
          Telephone:
          <input
            type="text"
            name="telefon"
            value={newDriversInfo.tel}
            onChange={(e) =>
              setNewDriversInfo({ ...newDriversInfo, tel: e.target.value })
            }
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="adress"
            value={newDriversInfo.address}
            onChange={(e) =>
              setNewDriversInfo({ ...newDriversInfo, address: e.target.value })
            }
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={newDriversInfo.city}
            onChange={(e) =>
              setNewDriversInfo({ ...newDriversInfo, city: e.target.value })
            }
          />
        </label>
        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
    </div>
  );
}

export default NewDriver;
