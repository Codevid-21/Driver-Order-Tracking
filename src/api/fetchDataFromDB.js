import dotenv from "dotenv";
dotenv.config();

const fetchDataFromDB = async function (url) {
  try {
    const options = {
      credentials: 'include',
    };
    return await fetch(url, options)
      .then((response) => response.json())
      .then((jsonData) => jsonData.result);
  } catch (error) {
    console.log(error);
  }
};

const postDataFromDB = async function (url, body) {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
      },
      credentials: 'include',
    };
    return await fetch(url, options)
      .then((response) => response.json())
      .then((jsonData) => jsonData.result);
  } catch (error) {
    console.log(error);
  }
};

const putDataFromDB = async function (email) {
  try {
    // MAIN
    const url = `/users/${email}`;
    
    // DEV
    // const url = `http://localhost:2005/users/${email}`;
    const options = {
      method: "PUT",
      body: "",
      headers: {
        "Content-type": "application/json",
      }
    };
    return await fetch(url, options)
      .then((response) => response.json())
      .then((jsonData) => jsonData.result);
  } catch (error) {
    console.log(error);
  }
};

const api = {
    fetchDataFromDB,
    postDataFromDB,
    putDataFromDB
}

export default api;