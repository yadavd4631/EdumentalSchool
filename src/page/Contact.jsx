import React from 'react'


const Contact = () => {



  return (
    <div className="flex justify-center items-center  mt-20 w-[50%]  ml-[20%] ">
      <div className="bg-[#FDF5FF] rounded-2xl flex-col justify-center items-center   ">
        <h1 className="text-3xl ml-[5%] mt-10">Leave a Message</h1>
        <div className=" items-center flex-col justify-center   mt-5  ml-[6%]">
          <input
            className="border-none rounded-2xl h-15 md:w-[40%] mr-10 bg-white p-4 mb-5  "
            type="name"
            placeholder="Guardian Name"
            required
          />
          <input
            className="border-none rounded-2xl h-15 md:w-[40%]  bg-white  p-4   mb-5 "
            type="number"
            name=" Contact"
            placeholder="Phone Number"
            required
          />
          <input
            className="border-none rounded-2xl h-15 md:w-[85%]  bg-white  p-4  mb-5  "
            type="email"
            name="Email"
            placeholder="Email"
          />
          <input
            className="border-none rounded-2xl h-15 md:w-[40%] mr-10 bg-white  p-4    mb-5 "
            type="name"
            placeholder="Child name"
            required
          />
          <input
            className="border-none rounded-2xl h-15 md:w-[40%]  bg-white  p-4  mb-5 "
            type="age"
            placeholder="Age of Child"
            required
          />
          <input
            className="border-none rounded-2xl h-35 md:w-[85%]  bg-white  p-4   mb-5 "
            type="message"
            placeholder="Message .. "
            required
          />
          <button className="border-none rounded-2xl h-15 md:w-[50%] md:mr-10 bg-purple-500 text-white p-4 ml-16 md:ml-32  cursor-pointer mb-5 ">
            Sumbit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact