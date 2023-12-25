import React from "react";

function Home() {
  return (
    <div className="bg-blue-50 mt-16 flex flex-col w-full">
      <div className="flex flex-col sm:flex-row w-full">
        <div className="sm:w-1/2 w-10/12 p-5 m-8 h-fit mt-16 rounded-lg shadow-lg text-xl sm:text-3xl font-extrabold text-black bg-slate-200">
          Hi there!
          <br />
          This is <span className="text-blue-500">Mahesh Barapatre</span>
          <br />
          I'm a <span className="text-blue-500">MERN DEVELOPER</span>.
        </div>
        <div className="sm:w-1/2 w-full">
          <img
            src="https://rahulkp15.onrender.com/static/media/dashboard.48011af8a598cfeec00f.gif"
            alt="img"
          />
        </div>
      </div>
      <div className="w-11/12 p-5 my-3 flex">
        <img
          src="https://pbs.twimg.com/profile_images/1660113718804643840/tI-L_tia_400x400.jpg"
          alt="profile pic"
          className="rounded-full w-20 h-20"
        />
        <div className="p-3 mb-5 ml-5 w-full rounded-lg shadow-lg font-extrabold text-black bg-slate-200">
          {"<Random Thoughts/>"} <br />
          <span className="text-blue-500">
            "It's not about the tool you choose; it's about the mastery and
            creativity you bring to its use."
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
