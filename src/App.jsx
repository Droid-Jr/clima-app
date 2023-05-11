import { useState, useEffect } from "react";


import Nav from "./components/Nav";

import axios from "axios";
import Clima from "./components/Clima";

function App() {

  // Data de la api
  const [data, setData] = useState();
  // Estado ciudad a buscar
  const [cityOut, setCityOut] = useState("");

  
  function getDataApi(pos) {
    const apiKey = "622a42d879dc5dadb853c63726a63a77";
    let api = "https://api.openweathermap.org/data/2.5/weather";
    (pos.coords === undefined ) ? api = `${api}?q=${pos}&appid=${apiKey}&lang=es`: 
    api = `${api}?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${apiKey}&lang=es`;
    axios.get(api)
      .then((res) => {
        setData({
          data: res.data,
          grades: {
            celsius: res.data.main.temp - 273.15,
            farenheit: 1.8 * (res.data.main.temp - 273) + 32,
          },
        });
      })
      .catch((err) => console.error(err));
  }

  // obtener las coordenadas de tu ubicacion 
  const getCoordinates = async (data = null) => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    if (data) {
      getDataApi(data);
    } else {
      navigator.geolocation.getCurrentPosition(
        getDataApi,
        (err) => {
          console.error(err);
        },
        options
      );
    }
  };


  const getCityOut = (a) => {
    setCityOut(a);
  };

  
  useEffect(() => {
    getCoordinates(cityOut);
  }, [cityOut]);

  
  useEffect(() => {
    getCoordinates();
  }, []);

  return (
    <>
      {data ? (
        <div className="container">
          <Nav valueOut={getCityOut} />
          <div>
            <Clima data={data} />
          </div>
        </div>
      ) : (
        <div class="center-body">
<div class="loader-circle-9">Loading
  <span></span>
</div>
</div>
      )}
    </>
  );
}

export default App;
