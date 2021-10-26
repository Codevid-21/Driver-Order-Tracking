const getLocalDate = (date) => {
  let orderDateObj = new Date(date);
  let localDate = orderDateObj.toLocaleString("en-US", {
    timeZone: "Europe/Berlin",
    hour12: false,
  });

  // let	dayOfMonth = objToday.getUTCDate() < 10 ? '0' + objToday.getUTCDate() : objToday.getUTCDate();
  // let	Month = objToday.getUTCMonth() + 1;
  // let Year = objToday.getUTCFullYear();
  // let Hour = objToday.getUTCHours() < 10 ? "0" + objToday.getUTCHours() : objToday.getUTCHours();
  // let Minute = objToday.getUTCMinutes() < 10 ? "0" + objToday.getUTCMinutes() : objToday.getUTCMinutes();

  // let today = `${Hour}:${Minute} - ${dayOfMonth}/${Month}/${Year}`;

  // const date = new Date();

  // console.log(date.toString())
  // console.log(date.toISOString())

  // return date.toISOString();
  let hour24 = localDate.slice(12, 14);
  let hour = hour24 === "24" ? "00" : hour24;
  let result =
    localDate.slice(3, 6) +
    localDate.slice(0, 3) +
    localDate.slice(6, 12) +
    hour +
    localDate.slice(14, -3);
  return result;
};

export default { getLocalDate };
