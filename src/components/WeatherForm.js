import React from "react";

const Weather = ({ changeHandler, clickHandler, inputValue }) => {
  return (
    <div className="flex items-center justify-center">
      <form className="my-4">
        <div className="lg:w-[500px] rounded-full w-[200px] sm:w-[400px] flex items-center justify-center bg-gray-200">
        <input
          type="text"
          onChange={changeHandler}
          value={inputValue}
          placeholder="Enter Location...."
          className="w-full outline-none bg-transparent p-2"
        />
        </div>
      </form>
      return (
        <div>
          <ImSpinner6 className="text-5xl animate-spin" />
        </div>
    );
    </div>
  );
};

export default Weather;
