import React from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

function Resume() {
  
const handleDownload = () => {
  // Create a link element
  const link = document.createElement("a");
  // Set the href attribute to the PDF URL
  link.href = "/assets/resume.pdf";
  // Set the download attribute to specify the default filename
  link.download = "maheshCV.pdf";
  // Append the link to the document
  document.body.appendChild(link);
  // Trigger a click on the link to start the download
  link.click();
  // Remove the link from the document
  document.body.removeChild(link);
};

      return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div className=" w-full flex flex-col items-center mt-20 relative">
            <button
              onClick={handleDownload}
              className="text-lg w-fit mx-auto rounded p-1 my-3 font-extrabold bg-blue-600 text-white hover:to-blue-500 cursor-pointer">
              Download Resume
            </button>
                          
              <Viewer fileUrl="/assets/Mahesh_Cv.pdf" />
            
            <button
              onClick={handleDownload}
              className="text-lg w-fit mx-auto rounded p-1 my-3 font-extrabold bg-blue-600 text-white hover:to-blue-500 cursor-pointer">
              Download Resume
            </button>
          </div>
        </Worker>
      );
    }
    


export default Resume
