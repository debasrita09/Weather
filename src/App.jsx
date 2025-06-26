import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from "./Search.jsx"
import Weather from "./Weathercard.jsx"

function App() {

  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");
  const [number, setNumber]=useState(1);
  const [move, setMove]=useState(false);

  useEffect(()=>{
    window.addEventListener("load", setMove(true))
  },[]);
  
  function num(){
      if(number!=5) setNumber(number+1);
      else setNumber(1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(prev => (prev !== 5 ? prev + 1 : 1));
    }, 3000);
    return () => clearInterval(interval);
  }, 100);

  async function fetchweather(city) {
    const apikey = "1ecde05c65e3add3acd24bbe4581225c";
    try {
      let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
      let data = await res.json();
      setMove(false);
      if (data.cod !== 200) {

        setWeather(null);
        setError("City not found. Please try again.");
        return;
      }

      setWeather(data);
      setError("");
    } catch (error) {
      setWeather(null);
      setError("Something went wrong. Please check your internet.");
    }
  }

  return (
    <>


      <Search onSearch={fetchweather} />
      
      {error &&
        <div className="error">
          <h1>{error}</h1>
          <h2>Try searching for the following cities</h2>
          <div className="cities">
            <button onClick={() => fetchweather("Chennai")}>Chennai</button>
            <button onClick={() => fetchweather("Shimla")}>Shimla</button>
            <button onClick={() => fetchweather("Delhi")}>Delhi</button>
            <button onClick={() => fetchweather("Mumbai")}>Mumbai</button>
            <button onClick={() => fetchweather("Kolkata")}>Kolkata</button>
            <button onClick={() => fetchweather("Bangalore")}>Bangalore</button>
          </div>

        </div>}
        {weather ? <Weather data={weather} key1=""/> : error?null:(
        <div className="default">
          <div className={`msgpic ${move? "move1": ""}`}>
            <div className="homemessage">
              Weather is now one search away.
            </div>
            <div className="picture" style={{backgroundImage: `url("/home${number}.jpg")`}}>
               
            </div>
          </div>
          Try searching for the following cities
          <div className={`popcities ${move? "move2": ""}`}>
            <button onClick={() => fetchweather("Chennai")}>Chennai</button>
            <button onClick={() => fetchweather("Shimla")}>Shimla</button>
            <button onClick={() => fetchweather("Delhi")}>Delhi</button>
            <button onClick={() => fetchweather("Mumbai")}>Mumbai</button>
            <button onClick={() => fetchweather("Kolkata")}>Kolkata</button>
            <button onClick={() => fetchweather("Bangalore")}>Bangalore</button>
          </div>

        </div>
      )}
    </>
  )
}

export default App
