let today = new Date();

document.getElementById("today").innerHTML = today.toDateString();

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
document.getElementById("weekday").innerHTML = day;

let inputval = document.querySelector("#cityinput");
let btn = document.querySelector("#add");
let city = document.querySelector("#cityoutput");
let descrip = document.querySelector("#description");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");

apik = "3045dd712ffe6e702e3245525ac7fa38";
function convertion(val) {
  return (val - 273).toFixed();
}
function kmph_to_mps(val) {
  return (0.277778 * val).toFixed(1);
}

btn.addEventListener("click", function (event) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    inputval.value +
    "&appid=" +
    apik
  )
    .then((res) => res.json())

    .then((data) => {
      let nameval = data["name"];
      let country = data["sys"]["country"];
      let descrip = data["weather"]["0"]["description"];
      let tempature = data["main"]["temp"];
      let wndspd = data["wind"]["speed"];
      let hum = data["main"]['humidity'];
      let feelTemp = data["main"]["feels_like"];
      
      
      console.log(data);
      city.innerHTML = `Weather of <span>${nameval}, (${country})</span>`;
      temp.innerHTML = `Temperature: <span>${convertion(
        tempature
      )} °C,</span> feels like: <span>${convertion(feelTemp)} °C.</span>`;
      description.innerHTML = `Sky Conditions: <span>${descrip}.</span>`;
      wind.innerHTML = `Wind Speed: <span>${kmph_to_mps(wndspd)} m/s, (${wndspd} km/h).<span>`;
      humidity.innerHTML = `Humidity: <span>${hum}  %.</span>`;
      
    })
    
    .catch((err) => alert("Neįvestas (arba blogai įvestas) miesto pavadinimas !!!"));
  
});
