import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

function Resume() {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1tT1cbCQQAZM_TDi3_sRNychhr7ehn38C/view?usp=sharing",
      "_blank",
    );
  };

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div className=" w-full flex flex-col items-center mt-28 md:mt-20 relative">
        <button
          onClick={handleDownload}
          className="text-lg w-fit mx-auto rounded p-1 my-3 font-extrabold bg-blue-600 text-white hover:to-blue-500 cursor-pointer"
        >
          Download Resume
        </button>

        <Viewer fileUrl="/assets/mahesh_barapatre_resume.pdf" />

        <button
          onClick={handleDownload}
          className="text-lg w-fit mx-auto rounded p-1 my-3 font-extrabold bg-blue-600 text-white hover:to-blue-500 cursor-pointer"
        >
          Download Resume
        </button>
      </div>
    </Worker>
  );
}

export default Resume;
