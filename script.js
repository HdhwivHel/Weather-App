// async function loaddata(city){
//     cityName.innerHTML = document.getElementById('city').value

//     const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
//     const options = {
//         method: 'GET',
//         headers: {
//             'content-type': 'application/octet-stream',
//             'X-RapidAPI-Key': '8160155dd1mshd3a96269fca0f06p16d415jsn6951226c94a2',
//             'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url+cityName, options);
//         const result = await response.text();
//         console.log(result);

//         temp.innerHTML =response.temp
//         feels_like.innerHTML =response.feels_like
//         min_temp.innerHTML =response.min_temp
//         max_temp.innerHTML =response.max_temp
//         humidity.innerHTML =response.humidity

//     } catch (error) {
//         console.error(error);
//     }
// }

// // submit.addEventListener("click", (e)=>{
// //     e.preventDefault()
// //     loaddata(city.value)
// // })

// let p =document.getElementById('cityName')
// p.innerHTML = "city";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8160155dd1mshd3a96269fca0f06p16d415jsn6951226c94a2",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

async function loadData() {
  let city = document.getElementById("city").value;
  city = city.toLowerCase();
  let city1 = city;
  city = city.charAt(0).toUpperCase();
  city1 = city1.substring(1, city1.length);
  let city2 = city + city1;

  if (city == undefined || city2 == "") {
    alert("Enter Valid city");
    return;
  }

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city2,
    options
   )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.temp == undefined || city2 == "") {
        alert("Enter Valid city");
        return;
      }
      cityName.innerHTML = city2;

      temp.innerHTML = response.temp + "C";
      feels_like.innerHTML = response.feels_like + "C";
      min_temp.innerHTML = response.min_temp + "C";
      max_temp.innerHTML = response.max_temp + "C";
      humidity.innerHTML = response.humidity + "%";
      console.log(response.temp);

      if (response.temp < 10 && response.temp <= 10) {
        document.getElementById("card-img-top").src = "0-10C.PNG";
      } else if (response.temp > 10 && response.temp <= 20) {
        document.getElementById("card-img-top").src = "10-20C.png";
      } else if (response.temp > 20 && response.temp <= 30) {
        document.getElementById("card-img-top").src = "20-30C.png";
      } else {
        document.getElementById("card-img-top").src = "sunny.png";
      }
    })
  .catch((err) => console.error(err));
}

//loadData();
