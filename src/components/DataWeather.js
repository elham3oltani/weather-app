import React, { useEffect, useState } from "react";
import {
  BsFillCloudHaze2Fill,
  BsFillCloudRainFill,
  BsSnow2,
  BsFillMoonStarsFill,
} from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import {
  IoMdCloudy,
  IoMdSunny,
  IoIosThunderstorm,
  IoMdRainy,
} from "react-icons/io";
import { ImSpinner6 } from "react-icons/im";
import {TiWeatherDownpour} from 'react-icons/ti'
const DataWeather = ({ data }) => {
  const [loading,setLoading]=useState(false)

useEffect(()=>{
  setLoading(data)
})
  let icon;
  let now = new Date();
  let h = now.getHours();
  let date = new Date();
  let day = date.getDay();

  switch (day) {
    case 0:
      day = "SUNDAY";
      break;
    case 1:
      day = "MONDAY";
      break;
    case 2:
      day = "TUESDAY";
      break;
    case 3:
      day = "WEDNESDAY";
      break;
    case 4:
      day = "THURSDAY";
      break;
    case 5:
      day = "FRIDAY";
      break;
    case 6:
      day = "SATURDAY";
  }

  console.log(h);
  switch (data.weather ? data.weather[0].main : null) {
    case "Clouds":
      icon = <IoMdCloudy />;
      break;
    case "Rain":
      icon = <BsFillCloudRainFill />;
      break;
    case "Clear":
      icon = h < 19 ? <IoMdSunny /> : <BsFillMoonStarsFill />;
      break;
    case "Haze":
      icon = <BsFillCloudHaze2Fill />;
      break;
    case "Snow":
      icon = <BsSnow2 />;
      break;
    case "Drizzle":
      icon = <IoMdRainy />;
      break;
    case "Thunderstorm":
      icon = <IoIosThunderstorm />;
      break;
      case "Mist":
        icon=<TiWeatherDownpour />
        break;
  }

  return (
    
<>
{loading ? <div className="rounded-2xl lg:w-[600px] w-full m-4 lg:mx-auto font-bold backdrop-blur-xl">
      <div className="flex lg:m-4 m-1 items-center justify-between">
        
        <div className="flex items-center m-1">
          <ImLocation className="lg:text-2xl text-xl" />
          <p className="lg:text-2xl text-lg">{data.name}</p>
          {data.sys ? (
            <span className="bg-sky-600 m-0.5 pt-0.5 w-4 h-5 text-sm lg:text-[16px] rounded-full lg:w-6 lg:h-6 text-center">
              {data.sys.country}
            </span>
          ) : (
            ""
          )}
         
        </div>
        <div className="font-bold lg:text-xl text-lg m-1">
            <h1>{day}</h1>
          </div>
      </div>
      <div className="flex-col m-8 text-center mx-auto items-center justify-center">
        <div className="">
          <p className="lg:text-8xl text-6xl font-Nunito">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </p>
        </div>
        <div className="flex items-center m-8 justify-center">
          <p className="text-7xl">{icon}</p>
        </div>
      </div>
      <div className="rounded-b-2xl bg-slate-400 text-white text-center bg-opacity-50 font-bold text-base lg:text-lg">
        <div className="flex justify-around items-center py-4">
          <div className="">
            {data.weather ? (
              <p className="">{data.weather[0]["description"]}</p>
            ) : null}

            <p className="text-slate-200">Description</p>
          </div>

          <div className="">
            {data.main ? <p className="">{data.main.humidity}%</p> : null}
            <p className="text-slate-200">Humidity</p>
          </div>
          <div className="">
            {data.main ? (
              <p className="">{data.main.feels_like.toFixed()}°F</p>
            ) : null}

            <p className="text-slate-200">Feels-Like</p>
          </div>
        </div>
      </div>
    </div>  : <p>loading</p>}
  
    
    </>





    
  );
};

export default DataWeather;
