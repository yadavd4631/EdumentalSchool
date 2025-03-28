import React from 'react'


const About = () => {
  return (
    <div className="md:flex justify-around items-center mt-20 w-full p-5 h-fit">
      <div className=" md:text-4xl bg-[#dbe9f7] p-7 md:h-[50vh] md:w-[40%] text-xl rounded-2xl  ">
        <div>
          <h1 className="text-purple-500 ">Why Choose Us?</h1>
          <p className="md:font-semibold text-zinc-600">
            <ul className="gap-3 flex-col justify-around items-center ">
              <li> &#8226; Integrated board syllabus</li>
              <li> &#8226; CBSE , ICSE & State Board</li>
              <li> &#8226; E-learning program</li>
              <li> &#8226; Innovative way of teaching</li>
              <li> &#8226; Creative writing skills</li>
              <li> &#8226; Foundation program</li>
              <li> &#8226; Qualified teacher</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="md:text-4xl  bg-[#dbe9f7] p-7  md:h-[50vh] text-xl md:w-[40%] rounded-2xl mt-5">
        <h1 className="text-purple-500 ">We Teach</h1>
        <p className="md:font-semibold text-zinc-600">
          <ul className="gap-3">
            <li> &#8226; Art & Sports</li>
            <li> &#8226; Karate Skills</li>
            <li> &#8226; Bollywood & Western Dance</li>
            <li> &#8226; Yoga & Meditation</li>
            <li> &#8226; Abacus & Vedic Maths</li>
            <li> &#8226; Jolly Phonics Learning</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default About