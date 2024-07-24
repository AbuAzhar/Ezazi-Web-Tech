import React from "react";

const Cards = ({ img, content, title, readMore }) => {
  return (
    <div className="card border  w-1/5  rounded-md">
      <div className="card-image ">
        <figure className=" is-4by3">
          <img src={img} className=" w-full h-60" alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content bg-slate-100 p-3 flex flex-col gap-1">
        <div className=" text-lg">{title}</div>
        <div className="text-gray-500">{content}</div>
        <button className="border w-2/5 border-black p-1">{readMore}</button>
      </div>
    </div>
  );
};
export default function ServiceCards() {
  return (
    <div className="bg-slate-50 flex flex-col items-center p-4 justify-center">
      <div className=" w-full text-center p-5">
        <h1 className="p-3 text-3xl font-bold">Services</h1>
      </div>
      <div className="flex flex-wrap gap-8 items-center justify-around p-5">
        <Cards
          title="Web Development"
          img="https://exsete.com/images/Business%20Intelligence.jpg"
          content="Our commitment to staying ahead of the curve enables us to provide remarkable outcomes that exceed expectations. By leveraging cutting-edge software and technology platforms, we create sophisticated and technically advanced solutions tailored to your specific needs."
          readMore="Read More"
        />
        <Cards
          title="Responsive Designing"
          img="https://exsete.com/images/Market%20consulting.jpg"
          content="Our commitment to staying ahead of the curve enables us to provide remarkable outcomes that exceed expectations. By leveraging cutting-edge software and technology platforms, we create sophisticated and technically advanced solutions tailored to your specific needs."
          readMore="Read More"
        />
        <Cards
          title="App Development"
          img="https://exsete.com/images/Observability.jpg"
          content="Our commitment to staying ahead of the curve enables us to provide remarkable outcomes that exceed expectations. By leveraging cutting-edge software and technology platforms, we create sophisticated and technically advanced solutions tailored to your specific needs."
          readMore="Read More"
        />
        <Cards
          title="Market Interlligence"
          img="https://exsete.com/images/Observability.jpg"
          content="Our commitment to staying ahead of the curve enables us to provide remarkable outcomes that exceed expectations. By leveraging cutting-edge software and technology platforms, we create sophisticated and technically advanced solutions tailored to your specific needs."
          readMore="Read More"
        />
        <Cards
          title="Web Analaysis"
          img="https://exsete.com/images/Bespoke%20Devlopment.jpg"
          content="Our commitment to staying ahead of the curve enables us to provide remarkable outcomes that exceed expectations. By leveraging cutting-edge software and technology platforms, we create sophisticated and technically advanced solutions tailored to your specific needs."
          readMore="Read More"
        />
        <Cards
          title="Web Design"
          img="https://exsete.com/images/Business%20Intelligence.jpg"
          content="Our commitment to staying ahead of the curve enables us to provide remarkable outcomes that exceed expectations. By leveraging cutting-edge software and technology platforms, we create sophisticated and technically advanced solutions tailored to your specific needs."
          readMore="Read More"
        />
        <Cards
          title="App Development"
          img="https://exsete.com/images/Business%20Intelligence.jpg"
          content="Our commitment to staying ahead of the curve enables us to provide remarkable outcomes that exceed expectations. By leveraging cutting-edge software and technology platforms, we create sophisticated and technically advanced solutions tailored to your specific needs."
          readMore="Read More"
        />
        <Cards
          title="Software Development"
          img="https://exsete.com/images/Business%20Intelligence.jpg"
          content="Our commitment to staying ahead of the curve enables us to provide remarkable outcomes that exceed expectations. By leveraging cutting-edge software and technology platforms, we create sophisticated and technically advanced solutions tailored to your specific needs."
          readMore="Read More"
        />
      </div>
    </div>
  );
}
