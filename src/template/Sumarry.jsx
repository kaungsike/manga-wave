import React from "react";

const Sumarry = ({ currentBook }) => {
  console.log(currentBook);

  return (
    <div>
      <div className="w-full h-[200px] overflow-hidden rounded-lg mb-5">
        <img
          className="w-full h-full object-cover"
          src={currentBook.coverImage}
          alt="Cover"
        />
      </div>
      <div className="w-full lg:h-[340px] mt-5 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="h-full w-[230px] overflow-hidden bg-gray-200 rounded-lg p-5">
          <img
            className="h-full rounded-lg"
            src={currentBook.coverImage}
            alt=""
          />
        </div>
        <div className="lg:h-full h-[750px] flex-grow overflow-hidden bg-gray-200 rounded-lg p-5">
          <img
            className="h-full rounded-lg"
            src={currentBook.coverImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sumarry;
