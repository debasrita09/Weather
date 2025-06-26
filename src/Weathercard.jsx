import { useState, useEffect } from 'react'
import "./weathercard.css"
export default function Weather({ data, key1 }) {
    key1=data.city;
    function capitalize(text) {
        return text
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }
    const [move, setMove]=useState(false);
    
      useEffect(()=>{
        setMove(false);
        const timer=setTimeout(()=>{
            setMove(true);
        },10);
        return ()=> clearTimeout(timer);
      },[key1]);
    let background;
    switch (data.weather[0].description) {
        case "clear sky": {
            background = "./clearsky.jpg";
            break;
        }
        case "few clouds": {
            background = "./fewclouds.jpg";
            break;
        }
        case "scattered clouds": {
            background = "./scatteredclouds.jpeg";
            break;
        }
        case "broken clouds": {
            background = "./brokenclouds.jpg";
            break;
        }
        case "overcast clouds": {
            background = "./overcastclouds.jpg";
            break;
        }
        case "light rain": {
            background = "./lightrain.jpg";
            break;
        }
        case "moderate rain": {
            background = "./moderaterain.jpeg";
            break;
        }
        case "heavy intensity rain": {
            background = "./heavyrain.jpg";
            break;
        }
        case "very heavy rain": {
            background = "./veryheavyrain.jpg";
            break;
        }
        case "extreme rain": {
            background = "./extremerain.jpg";
            break;
        }
        case "freezing rain": {
            background = "./freezingrain.jpg";
            break;
        }
        case "light intensity shower rain": {
            background = "./showerrain.jpg";
            break;
        }
        case "shower rain": {
            background = "./showerrain.jpg";
            break;
        }
        case "intense shower rain": {
            background = "./showerrain.jpg";
            break;
        }
        case "thunderstorm": {
            background = "./thunderstorm.jpg";
            break;
        }
        case "thunderstorm with light rain": {
            background = "./thunderlightrain.jpg";
            break;
        }
        case "thunderstorm with heavy rain": {
            background = "./thunderheavyrain.jpg";
            break;
        }
        case "light thunderstorm": {
            background = "./thunderstorm.jpg";
            break;
        }
        case "heavy thunderstorm": {
            background = "./heavythunder.jpg";
            break;
        }
        case "ragged thunderstorm": {
            background = "./thunderstorm.jpg";
            break;
        }
        case "thunderstorm with drizzle": {
            background = "./thunderlightrain.jpg";
            break;
        }
        case "light snow": {
            background = "./lightsnow.jpg";
            break;
        }
        case "snow": {
            background = "./snow.jpg";
            break;
        }
        case "heavy snow": {
            background = "./heavysnow.jpg";
            break;
        }
        case "sleet": {
            background = "./sleet.jpg";
            break;
        }
        case "light shower snow": {
            background = "./lightsnow2.jpg";
            break;
        }
        case "shower snow": {
            background = "./snow.jpg";
            break;
        }
        case "mist": {
            background = "./mist.jpg";
            break;
        }
        case "smoke": {
            background = "./smoke.jpg";
            break;
        }
        case "haze": {
            background = "./haze.jpg";
            break;
        }
        case "dust": {
            background = "./dust.jpeg";
            break;
        }
        case "sand": {
            background = "./dust.jpeg";
            break;
        }
        case "fog": {
            background = "./fog.jpg";
            break;
        }
        case "volcanic ash": {
            background = "./volcano.jpg";
            break;
        }
        case "squalls": {
            background = "./squalls.jpg";
            break;
        }
        case "tornado": {
            background = "./tornado.jpeg";
            break;
        }
        default:{
            background="./download.jpg";
        }
    }
    return (
        <div className="container" style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat'
        }}>
            <h2>Showing results for {capitalize(data.name)}</h2>
            <div className={`body ${move? "move3": ""}`}>
                <div className="temp">
                    <h3>Temperature</h3>
                    <div className="tempbody">
                        <div className="t1">{parseInt(data.main.temp)}</div>
                        <div className="t5">°C</div>

                    </div>
                    <h3>Feels like {parseInt(data.main.feels_like)}°C</h3>
                </div>
                <div className="other">
                    <div class="humidity">
                        <h3>Humidity</h3>
                        <div className="humiditybody">
                            <div className="h1">{data.main.humidity}</div>
                            <div classname="h5">%</div>
                        </div>
                    </div>
                    <div className="desc">
                        <div className="description">{capitalize(data.weather[0].description)}</div>
                    </div>
                    <div className="more">

                        <ul>
                            <li>Wind Speed: {data.wind.speed} m/s</li>
                            <li>Visibility: {data.visibility} meters</li>
                            <li>Pressure: {data.main.pressure}h Pa</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}