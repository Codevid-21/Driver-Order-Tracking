const fetchDataFromDB = async function (url) {
  try {
    return await fetch(url)
      .then((response) => response.json())
      .then((jsonData) => jsonData.result);
  } catch (error) {
    console.log(error);
  }
};

const api = {
    fetchDataFromDB
}

export default api;