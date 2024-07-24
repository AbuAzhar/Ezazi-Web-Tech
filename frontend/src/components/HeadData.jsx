import React from "react";

export default function HeadData({ title, description , mainDescription}) {
  return (
    <div className="bg-gradient-to-r from-sky-700 to-blue-500 w-full p-10  flex flex-col items-center justify-center gap-2">
      <h1 className="text-2xl text-white">{title}</h1>
      <p className="text-md text-gray-300 text-center w-3/4">{description}</p>
      <p className="text-md text-gray-300 text-center w-3/4">{mainDescription}</p>
    </div>
  );
}
