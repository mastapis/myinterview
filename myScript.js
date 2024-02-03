function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let session = "AM"
  m = checkTime(m);
  s = checkTime(s);
  if(h === 0){
      h = 12;
  }
  if(h > 12){
      h = h - 12;
      session = "PM";
   }
  document.getElementById('txt').innerHTML = "Current Time:  " + "'" + h + ":" + m + ":" + s + session + "'";
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;

}