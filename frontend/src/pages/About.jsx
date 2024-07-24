import React from "react";
import Achivements from "../components/Achivements";
import Footer from "../components/Footer";
import HeadData from "../components/HeadData";
import MissionVision from "../components/MissionVision";
import Team from "../components/Team";
export default function About() {
  return (
    <div>
      <div>
        <HeadData
          title={"About Me | Ezazi Web Tech"}
          description={
            "Welcome to Ezazi Web Tech, your one-stop solution for all your web development, SEO, and app development needs. Based in India, we are committed to delivering top-notch digital solutions that drive business growth and enhance online presence. Our team of experienced developers, designers, and SEO experts work collaboratively to create innovative and effective digital strategies tailored to your unique business requirements."
          }
          mainDescription={
            "At Ezazi Web Tech, we believe in the power of technology to transform businesses. Our mission is to empower our clients with cutting-edge web and app solutions that not only meet but exceed their expectations. We pride ourselves on our commitment to quality, creativity, and customer satisfaction."
          }
        />
      </div>
      <div>
        <MissionVision
          mission={"Our Mission"}
          description={
            "Our mission is to provide high-quality web development, SEO, and app development services that help businesses thrive in the digital landscape. We strive to deliver innovative solutions that enhance user experience, improve search engine rankings, and drive business growth. By leveraging the latest technologies and industry best practices, we aim to create digital products that are not only visually appealing but also highly functional and optimized for performance."
          }
          vImages={
            "https://img.freepik.com/free-photo/macro-eye-iris_23-2151618551.jpg?t=st=1720464633~exp=1720468233~hmac=0c7ebb330d47ce7c9845ec084e839ba0f40d752cadef63e94f54babf008223f6&w=826"
          }
          images={
            "https://img.freepik.com/free-vector/goal-achieved-colorful-landing-page_52683-650.jpg?t=st=1720464033~exp=1720467633~hmac=8d962c10176619a19cdde2d25879305d7e3bd5115787b17f3ba618d500f193bb&w=900"
          }
          vision={"Our Vision"}
          vDescription={
            "Our vision is to be a leading web and app development company in India, known for our excellence in delivering comprehensive digital solutions. We aspire to build long-term partnerships with our clients, helping them achieve their business goals through effective digital strategies. By staying at the forefront of technological advancements and continuously improving our services, we aim to set new standards of excellence in the web development industry."
          }
        />
      </div>
      <div className="bg-black text-white flex flex-col gap-4 p-16 items-center justify-center">
        <h3 className="w-full text-2xl font-bold">Our History</h3>
        <p className="text-md text-gray-400">
          Founded in 2019, Ezazi Web Tech has rapidly grown to become a trusted
          name in the web development, SEO, and app development industry. Our
          journey began with a simple yet ambitious goal: to provide top-tier
          digital solutions that empower businesses to succeed online. From our
          humble beginnings, we have stayed true to this vision, continually
          expanding our expertise and refining our services to meet the evolving
          needs of our clients.
        </p>
        <p className="text-md text-gray-400">
          Over the years, Ezazi Web Tech has successfully delivered hundreds of
          websites and digital products, each meticulously crafted to meet the
          unique needs of our clients. Our portfolio showcases a diverse range
          of projects, from sleek corporate websites and dynamic e-commerce
          platforms to innovative mobile applications and robust SEO campaigns.
          Every project we undertake is driven by a commitment to quality,
          creativity, and client satisfaction.
        </p>
        <p className="text-md text-gray-400">
          Our success is built on a foundation of strong client relationships
          and a passion for excellence. We take pride in our ability to
          transform ideas into reality, leveraging the latest technologies and
          industry best practices to deliver solutions that not only look great
          but also perform exceptionally. Our team of skilled professionals is
          dedicated to staying ahead of the curve, continually learning and
          adapting to the latest trends and advancements in the digital
          landscape.
        </p>
      </div>
      <div className="p-16 bg-black">
        <div
          className="border-2 p-10 bg-white  flex items-center justify-around"
          style={{ borderRadius: "70px" }}
        >
          <div className=" flex flex-col gap-5 p-5">
            <h3 className="w-full text-2xl font-bold">Our Achivements</h3>
            <img
              className="rounded-lg"
              width={500}
              src="https://img.freepik.com/free-vector/gradient-core-values-background_23-2149076685.jpg?t=st=1720466317~exp=1720469917~hmac=448277b104c7198ed69603b3abcefcfbbc810350425273ade748deb8d951e13a&w=900"
              alt=""
            />
          </div>
          <div className=" bg-blue-500  p-5 text-white flex  flex-col items-center justify-center h-4/5  w-2/5">
            <div className="flex  p-10 gap-16 w-full  items-center justify-center   ">
              <Achivements
                num={"100+"}
                data={"Hundreds of Successful Projects Delivered"}
              />
              <Achivements
                num={"20+"}
                data={"Award-Winning Web Development Servicess"}
              />
            </div>
            <div className="flex  p-10 gap-16  w-full  items-center  justify-center   ">
              <Achivements num={"35+"} data={"Top-Ranked SEO Campaigns"} />
              <Achivements
                num={"15+"}
                data={"Community and Industry Contributions"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex item-center flex-col justify-center  w-full p-10">
        <div className="w-full text-center">
          <h4 className="w-full text-2xl font-bold">Our Team</h4>
        </div>
        <div className="flex gap-10 p-10">
          <Team
            img={
              "https://img.freepik.com/premium-photo/abstract-line-art-drawing-smiling-guy-happy-man-sketch-art-modern-hand-drawn-illustration_117466-14856.jpg?w=1060"
            }
            name={"Asjad Ezazi"}
            title={"CEO & Founder"}
            description={
              " Asjad Ezazi is the visionary behind the company. He oversees the overall strategy and direction of the business, ensuring that the company achieves its goals and remains competitive in the market."
            }
          />
          <Team
            img={
              "https://img.freepik.com/premium-vector/sketch-hand-drawn-single-line-art-vintage-use-logo-poster-background_469760-4420.jpg?w=740"
            }
            name={"Sahvez Ali"}
            title={"Head of Development"}
            description={
              " Shavez Ali manages the development team and oversees all development projects. He ensures that projects are completed on time and within budget, and that the team adheres to the best practices in coding and development."
            }
          />
          <Team
            img={
              "https://img.freepik.com/premium-photo/drawing-boy-with-long-hair-shirt_1233337-518.jpg?w=360"
            }
            name={"Abu Azhar"}
            title={"Full-Stack Developer"}
            description={
              " Abu Azhar specializes in the user interface and user experience aspects of web development. She is responsible for implementing visual elements that users interact with through their web browser when using a web application. "
            }
          />
          <Team
            img={
              "https://img.freepik.com/premium-photo/drawing-man-with-sunglasses-beard_783884-293313.jpg?w=740"
            }
            name={"Mohd Uvais"}
            title={"Full-Stack Developer"}
            description={
              "Mohd Uvais focuses on the server & client side  of web applications. He is responsible for database management, server logic, and the integration of front-end work with back-end services."
            }
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
