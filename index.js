const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  //Apply zero infront of Hours,Minutes and seconds

  if (h < 10) {
    h = "0" + h;
  } else {
    h;
  }

  if (m < 10) {
    m = "0" + m;
  } else {
    m;
  }

  if (s < 10) {
    s = "0" + s;
  } else {
    s;
  }

  hourElement.innerText = h;
  minuteElement.innerText = m;
  secondElement.innerText = s;
  ampmElement.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
