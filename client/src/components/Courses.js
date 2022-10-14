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
    <div>
      <h1 className="font-bold text-2xl pl-2 ml-96 pt-20">Courses</h1>
      <ul>
        {courses.map((course) => (
          <SingleCourse key={course.id} course={course} />
        ))}
      </ul>
    </div>
  );
 
}

export default Courses;
