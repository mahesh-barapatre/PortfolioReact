import React from 'react'

function About() {

  const Skill = ({img}) => {
    return (
      <div className="shadow-md flex justify-center items-center w-32 h-36 p-4 rounded-lg object-cover bg-cyan-50 hover:scale-110 transform ease-in-out duration-100">
          <img src={img} alt="skill" />
      </div>
    )
  }

  const Card = ({ icon, title, para }) => {
    return (
      <div className="w-full my-5 sm:m-5 space-y-2 py-4 px-8 text-center rounded-lg shadow-md bg-cyan-50 bg- flex flex-col items-center text-black">
        <img className='w-8' src={icon} alt="logo" />
        <span>{title}</span>
        <p className='text-blue-500'>{para}</p>
      </div>
    )
  }


  return (
    <div className="flex flex-col p-4 mt-16 w-full bg-blue-50 font-extrabold text-black">
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
              hands-on experience in developing web applications with MERN stack{" "}
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
        <div className="w-full flex flex-wrap justify-evenly space-x-4 space-y-4">
          <Skill
            img={
              "https://rahulkp15.onrender.com/static/media/react.cc8a3326a9a43518b033b383390f00d0.svg"
            }
          />
          <Skill
            img={
              "https://rahulkp15.onrender.com/static/media/javascript.e7363ab96f901afdeb86963dd6a44ce2.svg"
            }
          />
          <Skill
            img={
              "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            }
          />
          <Skill
            img={
              "https://rahulkp15.onrender.com/static/media/nodejs.41a0e1af4b72f61e8496e4877da39db3.svg"
            }
          />
          <Skill
            img={
              "https://rahulkp15.onrender.com/static/media/mongodb.219f7ae3c9abd445d6b82c941ad73702.svg"
            }
          />
          <Skill
            img={
              "https://rahulkp15.onrender.com/static/media/express.1862ae411f8c1bde13179f1713fd3d06.svg"
            }
          />
          <Skill
            img={
              "https://rahulkp15.onrender.com/static/media/html.2b36cd2143b950115530edfde54f21ac.svg"
            }
          />
          <Skill
            img={
              "https://rahulkp15.onrender.com/static/media/css3.d51e893b4eecd56b38b570e498bd1712.svg"
            }
          />
          <Skill
            img={
              "https://rahulkp15.onrender.com/static/media/c++.7764d449dcf4f28e2275.png"
            }
          />
          <Skill
            img={
              "https://rahulkp15.onrender.com/static/media/git.ebf48408b5ae3138009c3d44ff956f56.svg"
            }
          />
          <Skill img={"https://sivanathan.info/asset/redux.svg"} />
          <Skill img={"https://www.svgrepo.com/show/354202/postman-icon.svg"} />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full uppercase text-3xl text-blue-500 text-center my-10">
          {"<my interest and hobbies/>"}
        </div>
        <div className="flex flex-col sm:flex-row w-full">
          <Card
            icon={"https://www.svgrepo.com/show/2918/student-reading.svg"}
            title={"Reading"}
            para={
              "I find joy in reading, exploring diverse worlds through books. It's not just a hobby; it's a passport to imagination, knowledge, and a constant source of inspiration in my life."
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
              "data:image/png;base64,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"
            }
            title={"Cooking"}
            para={
              "Cooking is my passion. From experimenting with flavors to creating delicious meals, it's more than a hobby—it's a creative outlet that brings joy and satisfaction to my everyday life."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default About
