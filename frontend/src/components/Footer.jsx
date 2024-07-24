import React from "react";

const FooterSection = ({ title, items }) => (
  <div className="mb-4 md:mb-0">
    <h1 className="text-xl font-bold mb-2">{title}</h1>
    <ul className="space-y-1 text-gray-400 cursor-pointer">
      {items.map((item, index) => (
        <li className="hover:text-blue-400" key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="w-full p-10 bg-black text-white">
      <div className="  flex flex-col item-center justify-center flex-wrap">
        <div className=" w-96 flex pl-16">
          <img
            width={80}
            src="https://media.licdn.com/dms/image/D4D03AQFnJ65teKuF7A/profile-displayphoto-shrink_800_800/0/1676565408665?e=1725494400&v=beta&t=PPc2mS9RkLvcP5aorBaZmQKHNA1J0fLvtpXLieUrA6s"
            alt="Profile"
            className="mb-4 border border-white rounded-lg"
          />
        </div>
        <div className="  flex  items-start justify-around p-4 gap-4 flex-wrap">
          <FooterSection
            title="Services"
            items={[
              "Web Development",
              "App Development",
              "SEO",
              "UI/UX Design",
              "Consulting",
            ]}
          />
          <FooterSection
            title="Social"
            items={["LinkedIn", "Facebook", "GitHub", "Twitter", "Instagram"]}
          />
          <FooterSection
            title="Quick Links"
            items={["Home", "About", "Team", "Contact", "Services"]}
          />
          <div className="text-gray-400">
            <h1 className="text-xl font-bold mb-2 text-white">Address</h1>
            <p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=janakpuri Chowk,+saharanpur,+uttarpradesh,+saharanpur"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Janakpuri Chowk, Saharanpur, <br /> Uttar Pradesh, India
              </a>
            </p>
            <h2 className="mt-4 font-bold text-white">Mobile</h2>
            <p>
              <a href="tel:+917454961965" className="hover:underline">
                +91 7454961965
              </a>
            </p>
            <h2 className="mt-4 font-bold text-white">Email</h2>
            <p>
              <a href="mailto:74abuazhar@gmail.com" className="hover:underline">
                74abuazhar@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t mt-5 border-gray-400  flex items-center justify-center">
        <p className=" text-xs mt-9 ">
          &copy; Copyright{" "}
          <a className="text-blue-600 hover:text-blue-300 hover:underline" href="https://ezaziweb.tech/">
            Ezazi Web Tech{" "}
          </a>{" "}
          All rights reserved 2022.
        </p>
      </div>
    </footer>
  );
}
