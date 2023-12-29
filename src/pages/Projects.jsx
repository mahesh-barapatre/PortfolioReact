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
      <div className="w-11/12 sm:w-72 space-y-1 text-center flex flex-col m-2 bg-indigo-100 shadow-md">
        <img src={img} alt="project image" />
        <span className="text-lg">{name}</span>
        <p className='text-gray-500'>{des}</p>
        <span className='uppercase text-md'>{stack}</span>
        <div className="flex w-full">

          {url && 
        <button
          onClick={() => window.open(url, "_blank")}
          className="text-lg w-fit mx-auto rounded p-1 my-3 font-extrabold bg-blue-600 text-white hover:to-blue-500 cursor-pointer"
        >Live Demo</button>
          }
        <button
          onClick={() => window.open(github, "_blank")}
          className="text-lg w-fit mx-auto rounded p-1 my-3 font-extrabold bg-blue-600 text-white hover:to-blue-500 cursor-pointer"
        >GitHub</button>
        </div>
      </div>
    );

  }
  const ExpCard = ({ img, org, des, role }) => {
    return (
      <div className="w-11/12 sm:w-72 space-y-1 flex flex-col m-5 bg-blue-50 text-black p-2 shadow-md">
        <img src={img} alt="work image" />
        <span className="text-xl uppercase font-bold">{org}</span>
        <p className='text-gray-500 uppercase font-bold'>{role}</p>
        <span className='text-sm font-semibold'>{des}</span>
        
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col bg-blue-50">
      <div className="w-full uppercase text-3xl text-blue-500 mt-20 font-extrabold text-center my-5">
        {"<my projects/>"}
      </div>
      <div className="w-full flex sm:space-x-6 flex-wrap font-extrabold">
        <Card
          stack={"MERN tailwind-css redux nodemailer"}
          url={"https://woo-ecommerce.vercel.app/"}
          github={"https://github.com/mahesh-barapatre/Woo-Ecommerce"}
          name={"Woo eCommerce"}
          des={
            "E-commerce responsive website with reviews, auth, seperate user+ admin dashboards"
          }
          img={"/assets/woo.png"}
        />
        <Card
          stack={"MERN tailwind-css cloudiary"}
          url={""}
          github={"https://github.com/mahesh-barapatre/Spotify-Clone"}
          name={"Spotify Clone"}
          des={
            "Full-featured Spotify clone with user authentication, playlist creation, song upload, and responsive design."
          }
          img={"/assets/spotify.png"}
        />
        <Card
          stack={"react-js firebase auth chakra-ui"}
          url={"https://genuine-madeleine-393c15.netlify.app/"}
          github={"https://github.com/mahesh-barapatre/ChatRoom"}
          name={"ChatRoom"}
          des={
            " with real-time messaging, user authentication, and intuitive interface."
          }
          img={"/assets/chatRoom.png"}
        />
        <Card
          stack={"react-js tailwind-css react-pdf"}
          url={"https://mahesh14.netlify.app/"}
          github={"https://github.com/mahesh-barapatre/PortfolioReact"}
          name={"Portfolio"}
          des={
            "Sleek portfolio showcasing skills, projects, and achievements with responsive design and contact form."
          }
          img={"/assets/portfolio.png"}
        />
        <Card
          stack={"react-js weather-api js css"}
          url={"https://delightful-melba-2e5263.netlify.app/"}
          github={"https://github.com/mahesh-barapatre/Weather-App/"}
          name={"Weather App"}
          des={
            "Weather app displaying current conditions, forecast, and user-friendly interface with location-based data."
          }
          img={"/assets/weather_app.png"}
        />
      </div>

      <div className="w-full flex flex-col">
        <div className="w-full font-extrabold uppercase text-3xl text-blue-500 text-center my-5">
          {"<Work and events/>"}
        </div>
        <div className="flex flex-col sm:flex-row">
          <ExpCard
            org={"sync intern's"}
            des={
              "During the React internship, I crafted four prototypes, elevating its success by enhancing user experience, improving platform efficiency, expanding functionality, and actively contributing to a collaborative and innovative development environment."
            }
            role={"react intern"}
            img={
              "https://static.wixstatic.com/media/5d3a75_a74999aa4fc34c90a7e45de2b3dc9b2a~mv2.png/v1/fill/w_228,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_20230706_224542.png"
            }
          />
          <ExpCard
            org={"GSSOC'23"}
            des={
              "Amplified project influence in GSSoC via pivotal feature implementations, bug resolutions, documentation updates, and heightened community engagement."
            }
            role={"contributor"}
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLI_bHVdU3CuIKlodozio_XYMC0rwZWL4hQw&usqp=CAU"
            }
          />
          <ExpCard
            org={"hacktoberfest'23"}
            des={
              "Elevated project impact in Hacktoberfest through key feature enhancements, issue resolutions, documentation updates, and increased community engagement."
            }
            role={"contributor"}
            img={
              "https://image.slidesharecdn.com/hacktoberfest23slidedeck-231002155230-6fbc60ae/85/hacktoberfest-23-slide-deckpptx-1-320.jpg?cb=1696262469"
            }
          />
        </div>
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
