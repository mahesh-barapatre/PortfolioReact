import React from "react";

function About() {
  const Skill = ({ img }) => {
    return (
      <div className="shadow-md flex justify-center items-center m-2 w-28 sm:32 lg:w-36 h-36 p-4 rounded-lg object-cover bg-cyan-50 hover:scale-110 transform ease-in-out duration-100">
        <img src={img} alt="skill" />
      </div>
    );
  };

  const skillsIcon = [
    "https://rahulkp15.onrender.com/static/media/react.cc8a3326a9a43518b033b383390f00d0.svg",

    "https://rahulkp15.onrender.com/static/media/javascript.e7363ab96f901afdeb86963dd6a44ce2.svg",

    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",

    "https://rahulkp15.onrender.com/static/media/nodejs.41a0e1af4b72f61e8496e4877da39db3.svg",

    "https://rahulkp15.onrender.com/static/media/mongodb.219f7ae3c9abd445d6b82c941ad73702.svg",

    "https://rahulkp15.onrender.com/static/media/express.1862ae411f8c1bde13179f1713fd3d06.svg",

    "https://rahulkp15.onrender.com/static/media/html.2b36cd2143b950115530edfde54f21ac.svg",

    "https://rahulkp15.onrender.com/static/media/css3.d51e893b4eecd56b38b570e498bd1712.svg",

    "https://rahulkp15.onrender.com/static/media/c++.7764d449dcf4f28e2275.png",

    "https://rahulkp15.onrender.com/static/media/git.ebf48408b5ae3138009c3d44ff956f56.svg",

    "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
    "https://www.svgrepo.com/show/354202/postman-icon.svg",
    "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
    "https://www.svgrepo.com/show/349342/docker.svg",
    "https://www.svgrepo.com/show/374144/typescript.svg",
    "https://www.svgrepo.com/show/376344/python.svg",
    "https://www.vectorlogo.zone/logos/postgresql/postgresql-vertical.svg",
  ];

  const Card = ({ icon, title, para }) => {
    return (
      <div className="w-full my-5 space-y-2 py-4 px-8 text-center rounded-lg shadow-md bg-cyan-50 flex flex-col items-center text-black">
        <img className="w-8" src={icon} alt="logo" />
        <span>{title}</span>
        <p className="text-blue-500">{para}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col p-4 md:mt-16 mt-20 w-full bg-blue-50 font-extrabold text-black">
      <div className="w-full flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2">
          <img
            src="https://www.roessner.tech/static/media/about.d8fe852f6a9badcd8616.png"
            alt="img"
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col justify-evenly">
          <span className="text-3xl">
            Know Who <span className="text-blue-500">I'm</span>
          </span>
          <p className="text-md font-bold">
            Hi Everyone, I am{" "}
            <span className="text-blue-500">Mahesh Barapatre</span> from{" "}
            <span className="text-blue-500">Madhya Pradesh, India</span>.
          </p>
          <p className="text-sm font-bold">
            I am an{" "}
            <span className="text-blue-500">
              innovative and dedicated hardworking developer{" "}
            </span>
            with{" "}
            <span className="text-gray-500">
              hands-on experience in developing full-stack web applications with
              AI integrations{" "}
            </span>
            .
          </p>
          <p className="text-md font-bold">
            I'm a{" "}
            <span className="text-blue-500">results-driven professional </span>
            ready to make a{" "}
            <span className="text-gray-500">
              significant impact on your team's success
            </span>{" "}
            and{" "}
            <span className="text-blue-500">help drive strategic growth</span>.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full uppercase text-3xl text-blue-500 text-center my-5">
          {"<my skillset/>"}
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {skillsIcon.map((img, index) => (
            <Skill key={index} img={img} />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full uppercase text-3xl text-blue-500 text-center my-10">
          {"<my interest and hobbies/>"}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <Card
            icon={"https://www.svgrepo.com/show/2918/student-reading.svg"}
            title={"Reading"}
            para={
              "I find joy in reading. It's not just a hobby; it's a passport to imagination, knowledge, and a constant source of inspiration in my life."
            }
          />
          <Card
            icon={
              "data:image/png;base64,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"
            }
            title={"Playing Games"}
            para={
              "Playing games is my source of joy. From the thrill of competition to the joy of teamwork, it's more than a hobby—it's a way to stay active, happy, and connected."
            }
          />
          <Card
            icon={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ_PyNSDbgw9vBqvQMlQJhXcbi0dRcPYLaw&usqp=CAU"
            }
            title={"Blogging"}
            para={
              "I enjoy blogging in my free time, showcasing my creativity and ability to express ideas effectively."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default About;
