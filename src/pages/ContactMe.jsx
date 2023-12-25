import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md"
  import { MdAddCall } from "react-icons/md";;

function ContactMe() {
  return (
    <div className="w-full mt-12 flex flex-col p-3 bg-blue-50">
      <div className="flex">
        <img
          src="https://rahulkp15.onrender.com/static/media/contact.411aa947ff95059dd5d7.png"
          alt="img"
          className="w-1/2"
        />
        <img
          src="https://rahulkp15.onrender.com/static/media/contact1.c6199ca74f4e653131db.png"
          alt="img"
          className="w-1/2"
        />
      </div>
      <div className="w-full font-extrabold flex jsutify-evenly mb-8 flex-col sm:flex-row">
        <div
          onClick={()=>window.open("https://linktr.ee/maheshbarapatre", "_blank")}
          className="w-full m-2 p-4 flex flex-col items-center align-middle rounded-lg bg-blue-100 shadow-md">
          <IoLocationSharp size={35} />
          FIND ME @ <br/>
          <span
            className='text-blue-500'>
          linktr.ee
          </span>
        </div>
        <div className="w-full m-2 p-4 flex flex-col items-center align-middle rounded-lg bg-blue-100 shadow-md">
          <MdOutlineMarkEmailRead size={35} />
          EMAIL ME @ <br/>
          <span className='text-blue-500'>
          maheshbarapatre14@gmail.com
          </span>
        </div>
        <div className="w-full m-2 p-4 flex flex-col items-center align-middle rounded-lg bg-blue-100 shadow-md">
          <MdAddCall size={35} />
          CONTACT ME @ <br/>
          <span className='text-blue-500'>
          (+91)-9039179882
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactMe
