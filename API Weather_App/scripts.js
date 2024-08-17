// 51850015decd3a02c6d831b541907a6b
const API_KEY='51850015decd3a02c6d831b541907a6b';
let API_URL='https://api.openweathermap.org/data/2.5/weather'

const getWeatherData =(city)=>{
    const FULL_URL=`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    const weatherPromise= fetch(FULL_URL);
    return weatherPromise.then((res)=>{
        return res.json();
    })
}

const searchCity =()=>{
    const city =document.querySelector('#city-input').value
    getWeatherData(city)
    .then((res)=>{
        console.log(res);
        showWeatherData(res);
       
    }).catch((error)=>{
        console.log(error);
        console.log('Something went wrong'); 
    })
}

showWeatherData=(weatherData)=>{
    const cityName=document.getElementById('city-name')
    cityName.innerText=weatherData.name;
    const weatherType=document.getElementById('weather-type');
    weatherType.innerText=weatherData.weather[0].main;
    const temp=document.getElementById('temp')
    temp.innerText=weatherData.main.temp;
    const minTemp=document.getElementById('min-temp')
    minTemp.innerText=weatherData.main.temp_min;
    const maxTemp=document.getElementById('max-temp')
    maxTemp.innerText=weatherData.main.temp_max;
}