import React from "react";
import { useHistory } from "react-router-dom";

function NewDriver() {
  let history = useHistory();

  const submitForm = () => {
    const url = `http://localhost:2005/orders`;
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: "deneme name",
        detail: "deneme detail",
        customerId: "deneme id customer",
        date: "deneme name",
        price: "beles",
        driver: "yok",
      }),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => console.log("Gönderilen Order", result));

    history.push("/");
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <h1>Information of new Driver</h1>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Surname:
          <input type="text" name="surname" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Telefonnummer:
          <input type="text" name="telefon" />
        </label>
        <label>
          Adress:
          <input type="text" name="adress" />
        </label>
        <label>
          City:
          <input type="text" name="city" />
        </label>
        {/* <label>
          City:
          <input type="text" name="city" />
        </label> */}
        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
    </div>
  );
}

export default NewDriver;
