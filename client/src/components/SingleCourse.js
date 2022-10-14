import React from "react";

function SingleCourse({ course }) {
  return (
    <div className="ml-96 pt-8 bg-gray-100 w-1/3 rounded-xl">
      <div className="py-2 ml-48 w-3/4">
        <img
          className="w-1/2 rounded-lg mb-2.5"
          src={course.image_url}
          alt="Abojani"
        />
        <h1 className="font-bold text-base">{course.title}</h1>
        <p>{course.instructors}</p>
        <p>Ksh. {course.price}</p>
      </div>
    </div>
  );
}
export default SingleCourse;
