import { useState, useEffect } from "react";

const Clima = ({ data }) => {

  // Estado para cambiar de grados celcius a farenheit
  const [change, setChange] = useState(false);
 
  // fcuntion para setear el estado change
  function handleClick  () {
    setChange(!change);
  } 

  return (
    <>
      <div className="card">
        <div className="card-primary">
          <h1>
            {
              change ? data.grades.farenheit.toFixed() +"ºF" : data.grades.celsius.toFixed() +"ºC" 
            }
          </h1>
          <p>Humedad: {data.data?.main.humidity}%</p>
          <p>Viento: {data.data?.wind.speed} m/s</p>
          <h2>{data.data?.name}, {data.data?.sys.country}</h2>
        </div>
        <div>
          <img
            src={data.data.weather?.map((item) =>
               item.icon === "01d"
                ? "/icons/01d.svg"
                : item.icon === "01n" 
                ? "/icons/01n.png"
                : item.icon === "02d" 
                ? "/icons/2.svg"
                : item.icon === "02n" 
                ? "/icons/02n.png"
                : item.icon === "03d" || item.icon === "03n"
                ? "/icons/3.svg"
                : item.icon === "04d" || item.icon === "04n"
                ? "/icons/4.svg"
                : item.icon === "09d" || item.icon === "09n"
                ? "/icons/6.svg"
                : item.icon === "10d" || item.icon === "10n"
                ? "/icons/5.svg"
                : item.icon === "11d" || item.icon === "11n"
                ? "/icons/9.svg"
                : item.icon === "13d" || item.icon === "13n"
                ? "/icons/7.svg"
                : "/icons/8.svg"
            )}
            alt={data.data.weather?.map((item) => item.description)}
          />
          <h3>{data.data.weather?.map((item) => item.description)}</h3>
        </div>
      </div>
      <div className="card-btn">
        <button onClick={handleClick}>
          {change ? "Change to Cº" : "Change to Fº"}
        </button>
      </div>
    </>
  );
};

export default Clima;
