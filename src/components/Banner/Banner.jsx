import React from "react";
import bannerImage from "../../assets/books.jpg"
const Banner = () => {
  return (
    <div className="bg-base-200 container mx-auto mt-10 mb-10 p-20 rounded-2xl">
      <div className="flex flex-col lg:flex-row-reverse justify-evenly items-center">
        <img src={bannerImage} className="max-w-sm rounded-lg" />
        <div className="space-y-9">
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn bg-[#23BE0A] text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
