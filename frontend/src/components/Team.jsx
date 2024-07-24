import React from "react";

export default function Team({ img, name, description, title }) {
  return (
    <div>
      <div className="border-2 flex flex-col gap-5 rounded-lg  p-2">
        <div>
          <img className="w-full h-72" style={{objectFit:"cover"}}  src={img} alt="" />
        </div>
        <div>
          <h4 className="w-full text-xl font-bold">{name}</h4>
          <h4 className="font-semibold">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
