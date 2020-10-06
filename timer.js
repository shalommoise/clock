let secondCount = 180;
let minCount = 180;
let hourCount = 180;
setInterval(function moveSecond() {
  secondCount += 6;
  if (secondCount === 360) secondCount = 0;
  document.getElementsByClassName(
    "secondhand"
  )[0].style.transform = `rotate(${secondCount}deg)`;
  console.log("sec", secondCount / 6, minCount / 6, hourCount / 6);
}, 1000);

setInterval(function moveMin() {
  minCount += 6;
  if (minCount === 360) minCount = 0;
  document.getElementsByClassName(
    "minutehand"
  )[0].style.transform = `rotate(${minCount}deg)`;
  console.log("min", secondCount / 6, minCount / 6, hourCount / 6);
}, 60000);
setInterval(function MoveHr() {
  hourCount += 6;
  if (hourCount === 360) hourCount = 0;
  document.getElementsByClassName(
    "hourhand"
  )[0].style.transform = `rotate(${hourCount}deg)`;
  console.log("Hour", secondCount / 6, minCount / 6, hourCount / 6);
}, 3600000);
