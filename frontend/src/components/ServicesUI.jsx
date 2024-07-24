import React from "react";

export default function ServicesUI({
  title,
  description,
  subHeading,
  first,
  sec,
  third,
  fourth,
  fifth,
  sixth,
  img
}) {
  return (
    <div className="flex items-center justify-around  p-10 gap-5">
      <div className="w-1/2 flex flex-col gap-2 p-10 ">
        <h2 className="w-full text-2xl font-bold">{title}</h2>
        <p className="text-lg text-gray-600">
         {description}
        </p> <br />
        <h3 className="w-full text-xl font-bold">{subHeading}</h3>
        <ul className="flex w-2/5  gap-3 items-start justify-between  flex-wrap list-disc p-2">
          <li>{first}</li>
          <li>{sec}</li>
          <li>{third}</li>
          <li>{fourth}</li>
          <li>{fifth}</li>
          <li>{sixth}</li>
        </ul>
        <button className=" w-fit p-4 rounded-lg bg-blue-600 text-white">View More</button>
      </div>
      <div className="">
        <img
        width={500}
          src={img}
          alt={title}
        />
      </div>
    </div>
  );
}
