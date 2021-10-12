import React, { useState } from "react";

function NewUser({ newUser }) {
  const userTemplate = { name: "", surname: "", email: "", tel: "", address: "", city: "" };
  const [newUsersInfo, setNewUsersInfo] = useState(userTemplate);
  const [password, setPassword] = useState("");
  const isUser = newUser.name === "User" ? true : false;

  const addANewDriver = (e) => {
    e.preventDefault();
    const body = isUser ? { ...newUsersInfo, password } : { ...newUsersInfo };
    const url = `http://localhost:2005/${newUser.fetch}`;
    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
      }
    };

    fetch(url, options).then(result => console.log("sonuc", result));
    if (isUser) {
      setNewUsersInfo(userTemplate);
      setPassword("");
    } else {
      setNewUsersInfo(userTemplate);
    }
  };

  return (
    <div className="newDriver__container">
      <form onSubmit={addANewDriver} autoComplete="off">
        <h2>Add a new {newUser.name}</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newUsersInfo.name}
            onChange={(e) =>
              setNewUsersInfo({ ...newUsersInfo, name: e.target.value })
            }
          />
        </label>
        <label>
          Surname:
          <input
            type="text"
            name="surname"
            value={newUsersInfo.surname}
            onChange={(e) =>
              setNewUsersInfo({ ...newUsersInfo, surname: e.target.value })
            }
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={newUsersInfo.email}
            onChange={(e) =>
              setNewUsersInfo({ ...newUsersInfo, email: e.target.value })
            }
          />
        </label>
        {isUser ? (
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </label>
        ) : null}
        <label>
          Telephone:
          <input
            type="text"
            name="telefon"
            value={newUsersInfo.tel}
            onChange={(e) =>
              setNewUsersInfo({ ...newUsersInfo, tel: e.target.value })
            }
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="adress"
            value={newUsersInfo.address}
            onChange={(e) =>
              setNewUsersInfo({ ...newUsersInfo, address: e.target.value })
            }
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={newUsersInfo.city}
            onChange={(e) =>
              setNewUsersInfo({ ...newUsersInfo, city: e.target.value })
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

export default NewUser;
