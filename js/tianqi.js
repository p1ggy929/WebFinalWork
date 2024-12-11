function getWeather() {
    const apiKey = '42b8101d590f890e66dbaf8955943ede';
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('请输入城市名称');
        return;
    }

    const url = `${baseURL}q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            alert('获取天气信息失败，请检查输入的城市名称是否正确');
        });
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
        <h2>${data.name} 天气</h2>
        <p>温度: ${data.main.temp}°C</p>
        <p>天气状况: ${data.weather[0].description}</p>
        <p>湿度: ${data.main.humidity}%</p>
        <p>风速: ${data.wind.speed} m/s</p>
    `;
}
