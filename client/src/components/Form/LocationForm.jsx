import React, { useState, useEffect } from "react";
import Axios from "axios";
import './style.css';


function LocationForm() {
  const [from, setFrom] = useState([]);
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");


  const sendDataToServer = (e) => {
    e.preventDefault();
    console.log(from , to, date);
    Axios.post('/user-info', { 
     from:from,
     to:to,
     date:date
  
    })
      .then(res => console.log("Posting data",res))
      .catch(err => console.error(err));
  }
    
  return (
    <div>
     
      {/* -------------------------------------FORM------------------------------------------------- */}
      <div className="min-h-screen 

  w-full
  h-screen
  bg-gradient-to-r
  from-orange-500
  via-yellow-200
  to-red-300
  background-animate

  py-4 
  px-8 
  flex 
  justify-center 
  items-center"
      >
        <img src=""></img>
        <div className="flex flex-col items-center rounded-2xl drop-shadow-lg backdrop-blur-sm bg-white/20 ... w-2/3 p-1">
          <h1 className="text-2xl font-bold text-orange-50  mt-3">Find Your Companion Now :)</h1>
          <form  onSubmit={sendDataToServer} className='flex flex-col w-3/3 mx-auto my-5 gap-y-2'>
            <label>From</label>
            <input
              list="data"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              type="text"
              // placeholder="e.g. Patna"
              className="p-2 rounded-2xl focus:outline-none border-2 border-orange-200"
            />
            {/* <datalist id="data">
          <options>Bihar</options>
          <options>Punjab</options>
          <options>Delhi</options>
        </datalist> */}


            <label>To</label>
            <input

              value={to}
              onChange={(e) => setTo(e.target.value)}
              type="text"
              placeholder="eg. Delhi"
              className="p-2 rounded-2xl focus:outline-none border-2 border-orange-200 w-auto"
            />
            <label>Date</label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="p-2 rounded-2xl focus:outline-none border-2 border-orange-200 w-auto"
            />
            <input
              type="submit"
              className="rounded-2xl bg-orange-500 my-2 p-2 text-orange-50 cursor-pointer"
            />
          </form>
        </div>
      </div>

    </div>
  );
}

export default LocationForm;
