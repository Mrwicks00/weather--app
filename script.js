// const searchCity = document.getElementById('searchCity')
const fetchWeather = async () => {
    
    const city = document.getElementById('searchCity').value.trim()
    const weatherImg = document.getElementById('weatherImg')
    const body = document.body
    if (city == '') {
        let error =document.getElementById('searchCity')
        error.placeholder = 'Please fill this empty space'
        return;
        
    }


    
    const apiKey = '834e325750876c3d361569f9cceaa2f5'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`

   
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`)

    if (response.status == 404) {
        document.querySelector('.invalid').style.display = 'block'
    }else {
        document.querySelector('.invalid').style.display = 'none'
        const data = await response.json()
    
            document.getElementById('temp').innerHTML = Math.round(data.main.temp) + '°C'
            document.getElementById('cityName').innerHTML = data.name
            document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
            document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h'
            document.getElementById('cityAbb').innerHTML = data.sys.country
            console.log(data);
            const weatherIconCode = data.weather[0].icon;
            weatherImg.src = `http://openweathermap.org/img/wn/${weatherIconCode}.png`;
    

            // weatherImg.src = data.weather[0].icon

            // if (data.weather[0].main == 'Clouds') {
            //     weatherImg.src = 'images/clouds.png'
            // }else if (data.weather[0].main == 'Rain') {
            //     weatherImg.src = 'images/rain.png'
                
            // }else if (data.weather[0].main == 'Drizzle') {
            //     weatherImg.src = 'images/drizzle.png'

            // }else if (data.weather[0].main == 'Mist') {
            //     weatherImg.src = 'images/mist.png'
            //     body.style.backgroundImage = 'url("images/pexels-sam-forson-154246.jpg")'

            // }else if (data.weather[0].main == 'Snow') {
            //     weatherImg.src = 'images/snow.png'

            // }else if (data.weather[0].main == 'Clear') {
            //     weatherImg.src = 'images/clear.png'

            // }else{
            //     console.error('no data found');
            // }
            document.getElementById('weatherImg').style.display = 'block'
            document.getElementById('searchCity').value = ''
            let error =document.getElementById('searchCity')
                error.placeholder = 'Enter city name'

         
    }
    }



