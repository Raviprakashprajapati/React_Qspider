import React, { useEffect, useState } from "react";

function UseEffect02() {
  const [data, setData] = useState([]);

  async function fetchGithub() {
    try {
      let response = await fetch("https://restcountries.com/v3.1/all");
      response = await response.json();
      setData(response);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchGithub();
  },[]);

  return (
    <div>
      <h2 className="text-center m-5">Data</h2>

      <div className="flex justify-evenly items-center gap-10 flex-wrap">
        {data.length > 0 &&
          data.map((i) => (
            <div className="bg-slate-800 p-2 rounded-lg w-[200px]">
              <div>
                <img
                  src={i?.flags?.png}
                  alt=""
                  className="h-20 w-150px] m-auto"
                />
              </div>
              <div className=" p-2 rounded-lg text-center">{i?.name?.common}</div>
              <div className=" bg-black p-2 rounded-lg text-center">{i?.name?.official}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default UseEffect02;
