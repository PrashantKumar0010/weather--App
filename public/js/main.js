const Btn = document.querySelector('.btn');
Btn.addEventListener('click', function (e) {
    e.preventDefault();
    const input = document.querySelector('.form-control').value
    if (input === '') {
        alert('Please enter a city name');
    }
    else {
        console.log(input);
        weatherApp(input)
    }
})
window.addEventListener('load', () => {
    weatherApp('mahoba')
})
weatherApp = (query) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather?q="
    const API_KEY = "afdd2f40f6b7d7c13a05025059043780"
    fetch(`${URL}${query}&appid=${API_KEY}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network error');
            }
            return response.json();
        }).then(response => {
            console.log(response)
            document.querySelector('.city').textContent = response.name;
            document.querySelector('.location').textContent = response.sys.country;
            document.querySelector('.temperature').textContent = response.main.temp + '°C';
            // document.querySelector('.humidity').textContent = response.main.humidity + '%';
            document.querySelector('.weather-description').textContent = response.weather[0].description;
        }).catch((err) => {
            alert('City not found');
        })
}