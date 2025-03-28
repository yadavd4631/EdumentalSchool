import React from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";


const Photogellry = () => {
  const dataimage = [img1, img2, img3, img4];

  return (
    <div className="bg-[#F8F6EF]">
      <h1 className="text-purple-500 flex justify-center items-center text-xl pt-15">
        Project Gallery
      </h1>
      <h1 className="text-zinc-600 font-semibold flex justify-center items-center md:text-5xl">
        Amazing Activities Done By 
      </h1>
      <h1 className="text-zinc-600 font-semibold flex justify-center items-center md:text-5xl">
         Our Kids
      </h1>

      <div className="w-full h-auto flex justify-around p-9">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-32">
          {dataimage.map((url, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                className="w-60 h-60 object-cover hover:scale-105 transition-transform duration-300"
                src={url}
                alt={`Gallery ${index }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photogellry;
