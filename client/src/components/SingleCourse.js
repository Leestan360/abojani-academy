import React from "react";

function SingleCourse({ course }) {
  return (
    <div className="ml-[350px] my-4 text-xl bg-gray-100 w-72 rounded-xl cursor-pointer">
      <div className=" w-full">
        <img
          className="w-full h-44 mb-3 rounded-xl"
          src={course.image_url}
          alt="Abojani"
        />
        <h1 className="font-bold text-xl">{course.title}</h1>
        <p >Instructors: <span className="text-xl">{course.instructors}</span></p>
        <p>Ksh. {course.price}</p>
      </div>
    </div>
  );
}
export default SingleCourse;
