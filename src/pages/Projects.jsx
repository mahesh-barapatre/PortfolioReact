import React from 'react'

function Projects() {

  const Blog = ({img, name, url}) => {
    return (
      <div className="w-11/12 sm:w-1/4 h-fit flex flex-col rounded-lg px-4 py-4 m-3 text-center font-extrabold shadow-lg bg-cyan-50">
        <img className='h-2/5 object-cover' src={img} alt="blog pic" />
        <span className="text-black text-lf my-1">{name}</span>
        <button
          onClick={()=>window.open(url, "_blank")}
          className="text-lg w-fit mx-auto rounded p-1 my-1 font-extrabold bg-blue-600 text-white hover:to-blue-500 cursor-pointer">
          View Blog
        </button>
      </div>
    );
  }

  const Card = ({img, name, des, stack, url, github}) => {
    return (
      <div className="w-11/12 sm:w-72 space-y-5 text-center flex flex-col m-2 p-4 bg-indigo-100 rounded-lg shadow-md">
        <img src={img} alt="project image" />
        <span className="text-lg">{name}</span>
        <p className='text-gray-500'>{des}</p>
        <span className='uppercase text-md'>{stack}</span>
        <div className="flex w-full">

        <button
          onClick={() => window.open(url, _blank)}
          className="text-lg w-fit mx-auto rounded p-1 my-3 font-extrabold bg-blue-600 text-white hover:to-blue-500 cursor-pointer"
        >Live Demo</button>
        <button
          onClick={() => window.open(github, _blank)}
          className="text-lg w-fit mx-auto rounded p-1 my-3 font-extrabold bg-blue-600 text-white hover:to-blue-500 cursor-pointer"
        >GitHub</button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col bg-blue-50">
      <div className="w-full uppercase text-3xl text-blue-500 mt-20 font-extrabold text-center my-5">
        {"<my projects/>"}
      </div>
      <div className="w-full flex justify-evenly sm:space-x-6 flex-wrap font-extrabold">
        <Card
          stack={"react js axios api javascript css"}
          url={"https://delightful-melba-2e5263.netlify.app/"}
          github={"https://github.com/mahesh-barapatre/Weather-App/"}
          name={"Weather App"}
          des={
            "Uses ReactJS and a weather API for real-time forecasts. Displays current conditions and dynamic updates, offering a user-friendly experience with concise weather information."
          }
          img={"/assets/weather_app.png"}
        />
        <Card
          stack={
            "rect js node js express mongodb tailwnd css rrdux-toolkit nodemailer"
          }
          url={"https://delightful-melba-2e5263.netlify.app/"}
          github={"https://github.com/mahesh-barapatre/Weather-App/"}
          name={"Woo Commerce"}
          des={
            "Elevate your shopping with our MERN Stack E-commerce: delivering a secure and efficient online experience."
          }
          img={"/assets/weather_app.png"}
        />
        <Card
          stack={"react js firebase chakra ui javascript auth"}
          url={"https://genuine-madeleine-393c15.netlify.app/"}
          github={"https://github.com/mahesh-barapatre/ChatRoom"}
          name={"ChatRoom"}
          des={
            "ChatRoom delivers an indispensable and highly efficient solution, revolutionizing communication with its user-friendly interface, real-time messaging, and robust functionality"
          }
          img={"/assets/chatRoom.png"}
        />
        <Card
          stack={"react js axios api javascript css"}
          url={"https://delightful-melba-2e5263.netlify.app/"}
          github={"https://github.com/mahesh-barapatre/Weather-App/"}
          name={"Spotify Clone"}
          des={
            "A Weather App utilizes a weather forecast API, integrated with ReactJS, providing users with real-time weather information. The application displays current conditions, forecasts, and updates dynamically for a seamless user experience."
          }
          img={"/assets/weather_app.png"}
        />
        <Card
          stack={"react js axios api javascript css"}
          url={"https://delightful-melba-2e5263.netlify.app/"}
          github={"https://github.com/mahesh-barapatre/Weather-App/"}
          name={"Blogging App"}
          des={
            "A Weather App utilizes a weather forecast API, integrated with ReactJS, providing users with real-time weather information. The application displays current conditions, forecasts, and updates dynamically for a seamless user experience."
          }
          img={"/assets/weather_app.png"}
        />
        <Card
          stack={"react js axios api javascript css"}
          url={"https://delightful-melba-2e5263.netlify.app/"}
          github={"https://github.com/mahesh-barapatre/Weather-App/"}
          name={"Chatting App"}
          des={
            "A Weather App utilizes a weather forecast API, integrated with ReactJS, providing users with real-time weather information. The application displays current conditions, forecasts, and updates dynamically for a seamless user experience."
          }
          img={"/assets/weather_app.png"}
        />
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full font-extrabold uppercase text-3xl text-blue-500 text-center my-5">
          {"<my Blogs/>"}
        </div>
        <div className="flex flex-col sm:flex-row">
          <Blog
            name={"Embracing AI as a Productivity Ally: A Collaborative Future"}
            url={
              "https://medium.com/@maheshbarapatre14/embracing-ai-as-a-productivity-ally-a-collaborative-future-b9b7c7449faf"
            }
            img={
              "https://automationswitch.s3.eu-west-2.amazonaws.com/wp-content/uploads/2023/06/09195936/AI-virtual-Friend-Apps.jpg"
            }
          />
          <Blog
            name={
              "The Unseen Edge: Soft Skills in Tech That Truly Make You Stand Out"
            }
            url={
              "https://medium.com/@maheshbarapatre14/the-unseen-edge-soft-skills-in-tech-that-truly-make-you-stand-out-5faba5e425b1"
            }
            img={
              "https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Projects
