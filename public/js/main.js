const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name'); 

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === "") {
        city_name.innerText = `plz write the name before search`;
    } else {
        try {
            let url = `api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4db7db4e3a44d8bbfa829b3b4dc08769`;
            const response = await fetch(url);
            console.log(response);
            const data = await response.json();
            const arrData = [data];
            console.log(arrData);

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;

            // condition to check sunny or cloudy
            if(tempMood == "Clear"){
                temp_status.innerHTML = '<i class="fas fa-sun" style="color: #eccc68;"></i>';
            } else if(tempMood == "Clouds"){
                temp_status.innerHTML = '<i class="fas fa-cloud" style="color: #eccc68;"></i>';
            } else if(tempMood == "Rain"){
                temp_status.innerHTML = '<i class="fas fa-rain" style="color: #eccc68;"></i>';
            } else{
                temp_status.innerHTML = '<i class="fas fa-cloud" style="color: #eccc68;"></i>';
            }

        } catch  {
            city_name.innerText = `plz enter the city name properly`;
        }
    }


}

submitBtn.addEventListener('click', getInfo);


// const cityName = document.getElementById('cityName');
// const submitBtn = document.getElementById('submitBtn');
// const city_name = document.getElementById('city_name');

// const getInfo = async(event) => {
//     event.preventDefault();
//     let cityVal = cityName.value;
    
//     if(cityVal === ""){
//         city_name.innerText = `plz write the name before search`;
//     }else{
//         try {
//             let url = `api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4db7db4e3a44d8bbfa829b3b4dc08769`;
//             const response = await fetch(url);
//             console.log(response);
//             const data = response.json();
//             console.log(data);
            
//         } catch {
//             city_name.innerText = `plz enter the city name properly`;
//         }
//     }
// }

// submitBtn.addEventListener('click', getInfo);


