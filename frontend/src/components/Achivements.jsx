import React from "react";

export default function Achivements({ num, data }) {
  return (
    <div className="  text-start flex flex-col  gap-2    w-1/3 ">
      <h3 className="text-6xl font-black">{num}</h3>
      <p className="text-gray-300 ">{data}</p>
    </div>
  );
}
