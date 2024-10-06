import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";


const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl underline font-bold">
            About us
          </h1>
          <br>
          </br>
          <h1 className="font-bold px-10 py-2 ">
            Who We Are
          </h1>
          <p className="px-23"> 
            We are a team of passionate travelers, explorers, and adventurers committed to making your travel dreams a reality.<br/>
            Our mission is to help you discover the world's hidden gems, create unforgettable memories, and connect with new cultures.<br/>
            With years of experience in the travel industry, we curate personalized travel experiences that cater to your interests, budget, and style.<br/>

          </p>
          <br />
          <h1 className="font-bold px-10 py-2">
          Our Mission            
          </h1>
          <p>
          At D'cruise, we believe that travel is more than just visiting new places; 
          it's about experiencing the world <br/>in its most authentic form.
          Our mission is to inspire and empower you to explore the wonders
          of our planet <br/> by offering well-planned trips, local insights, and off-the-beaten-path experiences.<br/>
          </p>
        </div>
      </div>
      
      {/* <BlogsComp /> */}
    </>
  );
};

export default About;
