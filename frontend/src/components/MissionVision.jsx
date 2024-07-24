import React from "react";

export default function MissionVision({
  mission,
  vision,
  vDescription,
  vImages,
  description,
  images,
}) {
  return (
    <div className=" flex flex-col ">
      <div className="flex items-center justify-around p-10 gap-5">
        <div className="w-1/2 flex flex-col gap-4">
          <h2 className="w-full text-2xl font-bold">{mission}</h2>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
        <div>
          <img width={500} src={images} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-around p-10 gap-5">
        <div>
          <img width={500} src={vImages} alt="" />
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <h2 className="w-full text-2xl font-bold">{vision}</h2>
          <p className="text-lg text-gray-600">{vDescription}</p>
        </div>
      </div>
    </div>
  );
}
