const clock = document.querySelector("#clock");
const date = document.querySelector("#date");

const months = [
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May",
  "Jun.",
  "Jul.",
  "Aug.",
  "Sep.",
  "Oct.",
  "Nov.",
  "Dec.",
];

let x = setInterval(() => {
  const time = new Date();

  const day = time.getDate();
  const month = months[time.getMonth()];
  const year = time.getFullYear();

  const hour =
    String(time.getHours()).length < 2
      ? `0${time.getHours()}`
      : time.getHours();
  const min =
    String(time.getMinutes()).length < 2
      ? `0${time.getMinutes()}`
      : time.getMinutes();
  const sec =
    String(time.getSeconds()).length < 2
      ? `0${time.getSeconds()}`
      : time.getSeconds();

  clock.innerHTML = `${hour}:${min}:${sec}`;
  date.innerHTML = `${day} - ${month} - ${year}`;
}, 1000);
