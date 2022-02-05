import { getWeather } from './getWeather.js';
import { addSearchListener } from './navigation.js';

function App() {

    addSearchListener();

    if (localStorage.getItem('weather_app')) {

        let JSONArray = JSON.parse(localStorage.getItem('weather_app'));
        console.log(JSONArray);

        for (let i = 0; i < JSONArray.length; i++) {
            let item = JSONArray[i];
            getWeather(item.place);
        }
    } else {
        let startArray = [];

        localStorage.setItem('weather_app', JSON.stringify(startArray));
    }

}

App();