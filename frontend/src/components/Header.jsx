import React from "react";
import technologies from "../technologies/webtech.png";
export default function Header() {
  return (
    <>
      <div className="flex items-center justify-center w-full p-10">
        <div className="flex flex-col w-1/2 p-20 gap-7">
          <h1 className="text-4xl font-bold">We help your Observability</h1>
          <p className="text-base text-gray-500	">
            Our clients utilize our expertise to have more in-depth and
            actionable insights into their operational data, and to make sure
            automations are covered to the fullest our expertise to have more
            in-depth and actionable insights into their operational data, and to
            make sure automations .
          </p>
        </div>
        <div className="w-1/2">
          <img
            src="https://exsete.com/images/path-digital-tR0jvlsmCuQ-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="  bg-sky-500	 flex items-center justify-around p-10">
        <div className="border-b pb-5 gap-2 flex flex-col">
          <p className="text-lg font-medium	text-slate-200">
            Innovative web solutions since the last
          </p>
          <h2 className="text-6xl font-bold">23+</h2>
          <h3 className="text-xl font-semibold">Years</h3>
        </div>
        <div className="border-b pb-5 gap-2 flex flex-col">
          <p className="text-lg font-medium text-slate-200	">
            Successfully accomplished more than
          </p>
          <h2 className="text-6xl	 font-bold">1000+</h2>
          <h3 className="text-xl font-semibold">Projects</h3>
        </div>
        <div className="border-b gap-2 flex pb-5 flex-col">
          <p className="text-lg font-medium text-slate-200	">
            Managing more than
          </p>
          <h2 className="text-6xl font-bold">360+</h2>
          <h3 className="text-xl font-semibold">websites</h3>
        </div>
      </div>
      <div className=" flex   justify-evenly items-center gap-3   w-full p-10">
        <div className="w-1/2 flex text-xl  gap-3 flex-col items-start justify-center">
          <h2>Technology</h2>
          <h3>
            At Sterco Digitex, we embrace the ever-evolving world of technology
            to deliver high-quality solutions.
          </h3>
          <p>
            Our commitment to staying ahead of the curve enables us to provide
            remarkable outcomes that exceed expectations. By leveraging
            cutting-edge software and technology platforms, we create
            sophisticated and technically advanced solutions tailored to your
            specific needs.
          </p>
        </div>
        <div className="w-fit  p-0 flex items-center justify-center ">
          <img
            className=""
            width={500}
            src={technologies}
            alt="web technologies"
          />
        </div>
      </div>
    </>
  );
}
