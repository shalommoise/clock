

setInterval(function(){
let sec = Date().split(" ")[4].split(":")[2];
let min = Date().split(" ")[4].split(":")[1];
let hr = Date().split(" ")[4].split(":")[0];

  document.getElementsByClassName("secondhand")[0].style.transform = `rotate(${sec*6}deg)`; 
  document.getElementsByClassName("minutehand")[0].style.transform = `rotate(${min*6}deg)`;
  if(hr > 12) hr -=12;
  document.getElementsByClassName("hourhand")[0].style.transform = `rotate(${hr*30}deg)`;
  document.getElementsByClassName("Outerclock")[0].style.display ="block"
}, 1000);

