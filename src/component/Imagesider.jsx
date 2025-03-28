import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    {
      url: "https://lh3.googleusercontent.com/p/AF1QipPamYV9FEQtshToYiFik5ms-2TAU751UEdn-AeX=s1360-w1360-h1020",
    },
    {
      url: "https://lh3.googleusercontent.com/p/AF1QipMCAv8VRS1n_djqzJ5S7aCVgcIcX9nZ_e7aDx0h=s1360-w1360-h1020",
    },
    {
      url: "https://lh3.googleusercontent.com/p/AF1QipPytk97SCnsMtKwqb_DTOnof-sWRpmY5M9TigMB=s1360-w1360-h1020",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative bg-zinc-500 h-[55vh] w-full flex justify-center items-center ">
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
      ></div>
      <div className="absolute ">
        <h1 className=" text-white text-bold -mt-40 bg-red-400 w-fit mb-5 text-2xl md:text-5xl">
          Admission Open For 2025-26   
        </h1>
       
        <p className=" text-white text-bold bg-red-400  mb-5  md:text-5xl">
          Grade :- KG./NR.KG./JR.KG./SR.KG./I TO IV /V TO X
        </p>
        <p className=" text-zinc-100 text-bold bg-red-400 text-2xl w-fit md:text-5xl">
          No Donation / No Deposit  
        </p>
      </div>
    </div>
  );
};

export default ImageSlider;
