import React from 'react'
import { GiTeacher } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";


const Info = () => {
  return (
    <div>
      <div className="w-full mt-36 md:h-[40vh] bg-[#dbe9f7] rounded-xl flex justify-around items-center ">
        <div className=" md:flex md:flex-col justify-center items-center">
          <span className="text-5xl text-amber-500 ">
            <GiTeacher />
          </span>
          <h1 className="md:text-5xl  md:font-bold mt-5 ml-2"> 10+</h1>
          <p className="md:text-4xl ml-2 mt-5">Qualified Teachers</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <span className="text-5xl text-amber-500">
            <FaAward />
          </span>
          <h1 className="md:text-5xl  md:font-bold mt-5"> 5+</h1>
          <p className="md:text-4xl  mt-5">Years Of Experience</p>
        </div>
        <div className=" flex flex-col justify-center items-center ">
          <span className="text-5xl text-amber-500">
            <HiUserGroup />
          </span>
          <h1 className="md:text-5xl  font-bold mt-5"> 300+</h1>
          <p className="md:text-4xl  mt-5">Students Enrolled</p>
        </div>
        </div>.
        
    </div>
  );
}

export default Info