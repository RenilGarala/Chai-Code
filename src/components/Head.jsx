import React from "react";
import rightArrow from "../assets/right-arrow.png";
const Head = () => {
  return (
    <div className="flex flex-col justify-center items-center my-48">
      <div className="text-gray-300 border px-5 py-2 rounded-full border-gray-700">
        Trusted by 1.5M Code Learners
      </div>
      <div className="flex flex-col items-center py-5 font-medium text-6xl leading-tight tracking-wide bg-gradient-to-tr from-orange-400 to-yellow-400/90 bg-clip-text text-transparent">
        <div>Consistency and Community</div>
        <div>Learning for Coding Courses</div>
      </div>

      <div className="max-w-2/5 my-5 text-center font-light text-lg text-gray-300">
        Content is everywhere - we offer an unmatched learning experience.
        Bounties, peer reviews, doubt sessions, virtual hostel, alumni network,
        group projects, and more to keep you on track
      </div>
      <div className="flex gap-3 my-5 text-gray-300 border px-5 py-2 rounded-full border-gray-700 cursor-pointer hover:-translate-y-1 duration-300">
        Cheake All Live Cohorts <img className="w-5" src={rightArrow} />
      </div>
    </div>
  );
};

export default Head;
