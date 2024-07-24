import Footer from "../components/Footer";
import HeadData from "../components/HeadData";
import ServicesUI from "../components/ServicesUI";
import ServiceUILeft from "../components/ServiceUILeft";
export default function Services() {
  return (
    <div>
      <HeadData
        title={"Tech - Services | Ezazi Web Tech"}
        description={
          "Discover professional web development services at Ezazi Web Tech. From custom website design to SEO optimization, we help you build a robust online presence."
        }
        mainDescription={
          "At Ezazi Web Tech, we provide comprehensive web development services tailored to meet the unique needs of our clients. Our expertise spans from custom website development to SEO optimization, ensuring your online presence is both powerful and effective."
        }
      />
      <div className="w-full p-5 text-center bg-black text-white">
        <h2 className="w-full text-3xl font-bold p-5">OUR SERVICES</h2>
      </div>
      <ServicesUI
        title={"Web Development"}
        description={
          "Cross-browser and cross-device compatibility driven by mobile responsiveness all under one roof Starting from basic website designs, including CMS and online store building to highly complex business website apps and design solutions, we will customize the best of web development solutions for you."
        }
        subHeading={"Our Web Development Services"}
        first={"Custom Application Development"}
        sec={"Ecommerce Development"}
        third={"Content Management System (CMS)"}
        fourth={"Web Design"}
        fifth={"Web Hosting"}
        sixth={"Web Maintenance"}
        img={
          "https://img.freepik.com/premium-vector/web-development-flat-design-concept-blue-style-with-decorated-small-people-character_9209-853.jpg?size=626&ext=jpg&ga=GA1.1.862501396.1691746470&semt=ais_user"
        }
      />
      <div className="bg-slate-50  rounded-3xl">
        <ServiceUILeft
          title={"Digital marketing"}
          description={
            "Developing a long-term and reliable marketing strategy that will flourish and live a longer life, while ensuring your customers stay with you and tell the world the tales of your business’s awesomeness transforming our custom-made business strategies into real time success."
          }
          subHeading={"Our Digital Marketing Services"}
          first={"Inbound Marketing"}
          sec={"Online Reputation Management"}
          third={"Content Marketing"}
          fourth={"Email Marketing"}
          fifth={"Social Media Optimization"}
          sixth={"SEM & PPC"}
          img={
            "https://img.freepik.com/premium-photo/strategy-framework-marketing-campaign-concept_1073912-3540.jpg?w=740"
          }
        />
      </div>
      <ServicesUI
        title={"Interface Design"}
        description={
          "Creative, attractive, engaging and usable interfaces are the soul of any designs. We will help design custom user interfaces based on your business requirements for any of your device platforms, including mobile apps, tablets, desktops and KIOSKS."
        }
        subHeading={"Our Interface Services"}
        first={"Web Design"}
        sec={"UI Design"}
        third={"Mobile UI Design"}
        fourth={"Landing Page Design"}
        fifth={"Blog Design"}
        sixth={"Designing for Wearables"}
        img={
          "https://img.freepik.com/free-vector/user-flow-concept-illustration_114360-1818.jpg?ga=GA1.1.862501396.1691746470&semt=ais_user"
        }
      />
      <div className="bg-slate-50  rounded-3xl">
        <ServiceUILeft
          title={"UX Design"}
          description={
            "UX drives UI. Our team of UX designers at Acodez have ample of years of experience in the core areas of user experience, which helps them collaborate the finer modules of usability and functionality in-line with business goals and end-user needs."
          }
          subHeading={"Our UX Design Services"}
          first={"UX Research"}
          sec={"Information Architecture"}
          third={"Mood Boards"}
          fourth={"Wire framing"}
          fifth={"Interaction Design"}
          sixth={"Information Architecture"}
          img={
            "https://img.freepik.com/premium-photo/strategy-framework-marketing-campaign-concept_1073912-3540.jpg?w=740"
          }
        />
      </div>
      <Footer />
    </div>
  );
}
