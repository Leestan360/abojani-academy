import React, { useEffect, useState } from "react";
import SingleCourse from "./SingleCourse";

function Courses() {

  
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);


  return (
    <div className="w-3/4">
      <h1 className="font-bold text-4xl pl-2 ml-[350px] pt-20 ">Courses</h1>
      <div className="grid grid-cols-3 gap-1">
        {courses.map((course) => (
          <SingleCourse key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
 
}

export default Courses;
