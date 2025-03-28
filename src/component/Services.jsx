import React from "react";

const Services = () => {
  const data = [
    {
      img: "img/service-1.png",
      detail:
        "Our school provides a safe and reliable bus service to ensure students have a comfortable and secure journey to and from school. Our well-maintained buses are driven by trained professionals and equipped with safety features, ensuring punctual and hassle-free transportation for every student. 🚸✨",
      color: "bg-red-300",
      hoverColor: "hover:bg-red-500",
    },
    {
      img: "img/service-2.png",
      detail:
        "Our school offers a dynamic sports program to encourage physical fitness, teamwork, and discipline. With expert coaches and well-equipped facilities, students can participate in various sports, enhancing their skills and overall well-being",
      color: "bg-blue-300",
      hoverColor: "hover:bg-blue-500",
    },
    {
      img: "img/service-3.png",
      detail:
        "Our dedicated music teachers inspire students to explore their musical talents through vocal and instrumental training. With a focus on creativity and expression, we nurture a love for music and performance in a fun and engaging environment",
      color: "bg-yellow-300",
      hoverColor: "hover:bg-yellow-400",
    },
    {
      img: "img/service-4.png",
      detail:
        "Our dedicated and experienced teachers are committed to providing quality education, fostering curiosity, and nurturing young minds. With a passion for teaching, they create a supportive and engaging learning environment, helping students achieve academic excellence and personal growth. ✨🎓",
      color: "bg-sky-200",
      hoverColor: "hover:bg-sky-500",
    },
  ];



  const about = ()=>{
    useraf(about)

  }

  return (
    <div  onClick={about}>
      <div className="flex flex-col justify-center items-center mt-20">
        <p className="text-purple-500 text-xl">Service We Provide</p>
        <h1 className="font-bold md:text-4xl text-zinc-600 text-3xl">
          Providing Good Qualities
        </h1>
        <h1 className="font-bold md:text-4xl text-3xl text-zinc-600">
          For Your Loving Kids
        </h1>
      </div>

     
      <div className="flex justify-evenly items-center mt-10 flex-wrap gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className={`h-86 w-68 border-none outline-none rounded-3xl flex flex-col items-center justify-center text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:text-white ${item.color} ${item.hoverColor}`}
          >
            <img src={item.img} alt="Service" className="h-16 w-16 mb-2" />
            <p className="px-4">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
