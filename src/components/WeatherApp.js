import React, { useEffect, useState } from "react";
import DataWeather from "./DataWeather";
import axios from "axios";

import { FiSearch } from "react-icons/fi";
import { ImSpinner6 } from "react-icons/im";

const WeatherApp = () => {
  const apiKey = "66b5730415d83c3da1b80d13ac0d354a";
  let [data, setData] = useState({});
  let [inputValue,setInputValue]=useState("")
  let [location, setLocation] = useState("kerman");
  const [animate, setAnimate] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');

  const [loading,setLoading]=useState(false)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const clickHandler = (e) => {
    // if input value is not empty
    if (inputValue !== '') {
      // set location
      setLocation(inputValue);
    }

    // select input
    const input = document.querySelector('input');

    // if input value is empty
    if (input.value === '') {
      // set animate to true
      setAnimate(true);
      // after 500 ms set animate to false
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }

    // clear input
    input.value = '';

    // prevent defaults
    e.preventDefault();
  };


  console.log(data);

  useEffect(() => {
    // set loading to true
    setLoading(true);


    axios
      .get(url)
      .then((res) => {
        // set the data after 1500 ms
       
          setData(res.data);
     
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err);
      });
  }, [location]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg('');
    }, 2000);
    // clear timer
    return () => clearTimeout(timer);
  }, [errorMsg]);
  if (!data) {
    return (
      <div>
        <ImSpinner6 className="text-5xl animate-spin" />
      </div>
    );
  }
  return (
    <>
    <div className="flex flex-col h-screen font-primary w-full bg-cover justify-between bg-banner">
    {errorMsg && (
        <div className='w-full text-center top-24 text-2xl text-white absolute capitalize rounded-md'>{`${errorMsg.response.data.message}`}</div>
      )}
      <div className="flex items-center justify-center">
     
        <form className={`${
          animate ? 'animate-shake' : 'animate-none'} h-14 bg-black/30 w-full my-4 mx-2 relative max-w-[450px] rounded-full`}>
          <div className="lg:w-[500px] relative rounded-full text-[15px] pl-6 flex items-center h-full justify-center p-2 bg-gray-200">
            <input
              type="text"
              onChange={changeHandler}
              placeholder="Enter Location...."
              className="w-full outline-none bg-transparent flex-1 p-2 placeholder:text-gray-600 font-sans font-bold text-md"
            />
            <button
              onClick={clickHandler}
              className="bg-sky-400 w-[70px] h-10 cursor-pointer rounded-full"
            >
              <FiSearch className="text-2xl mx-auto" />
            </button>
          </div>
        </form>
      
      </div>
     
     <div className="flex">
   
     {<DataWeather data={data} />}
     </div>
      
      <div className="h-[90px]">

      </div>

    </div>
    
    </>
  );
};

export default WeatherApp;
