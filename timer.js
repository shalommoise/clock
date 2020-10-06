const sec = Date().split(" ")[4].split(":")[2];
const min = Date().split(" ")[4].split(":")[1];
const hr = Date().split(" ")[4].split(":")[2];
let secondCount = sec * 6;
let minCount = min * 6;
let hourCount = hr * 15;
setInterval(function moveSecond() {
  secondCount += 6;
  if (secondCount === 360) secondCount = 0;
  document.getElementsByClassName(
    "secondhand"
  )[0].style.transform = `rotate(${secondCount}deg)`;
}, 1000);

setInterval(function moveMin() {
  minCount += 6;
  if (minCount === 360) minCount = 0;
  document.getElementsByClassName(
    "minutehand"
  )[0].style.transform = `rotate(${minCount}deg)`;
}, 60000);
setInterval(function MoveHr() {
  hourCount += 15;
  if (hourCount === 360) hourCount = 0;
  document.getElementsByClassName(
    "hourhand"
  )[0].style.transform = `rotate(${hourCount}deg)`;
}, 3600000);
console.log(Date());
console.log(Date().split(" ")[4].split(":")[0]);
console.log(Date().split(" ")[4].split(":")[1]);
console.log(Date().split(" ")[4].split(":")[2]);
