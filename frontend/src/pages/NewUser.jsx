import React, { useState } from "react";
import api from "../api/fetchDataFromDB";

function NewUser({ newUser }) {
  const userTemplate = { name: "", surname: "", email: "", tel: "", address: "", city: "", type: "" };
  const [newUsersInfo, setNewUsersInfo] = useState(userTemplate);
  const [password, setPassword] = useState("");
  const isUser = newUser.name === "User" ? true : false;

  const addANewDriver = (e) => {
    e.preventDefault();
    const body = isUser ? { ...newUsersInfo, password } : { ...newUsersInfo };
    const fetchUrl = newUser.name === "Driver" ? "drivers" : newUsersInfo.type === "Admin" ? "users/admin" : "users/register";
    console.log("det", fetchUrl);
    const url = `http://localhost:2005/${fetchUrl}`;
    console.log("url", url);
    api.postDataFromDB(url, body).then(result => {
      console.log("buraya geldi mi ", result)
      // isUser ?
      //   api.putDataFromDB(result.email)
      //   :
      //   console.log(result)
    });

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
        {isUser && (
          <div onChange={(e) => setNewUsersInfo({ ...newUsersInfo, type: e.target.value })}>
            User type:
            <input type="radio" value="Staff" name="newUser" defaultChecked/> Staff
            <input type="radio" value="Admin" name="newUser" /> Admin
          </div>
        )}
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
