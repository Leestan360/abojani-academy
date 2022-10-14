import React, { useEffect, useState } from "react";
import SingleCourse from "./SingleCourse";

function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  // let first = courses[Object.keys(courses)[3]];

  // const eachCourse = courses.map((course, index) => {
  //   return (
  //     <div>
  //       <ul>
  //         <li key={index} className="w-64 pr-5 pt-5">
  //           <img
  //             className="rounded-lg mb-2.5"
  //             src={course.image_url}
  //             alt="Abojani"
  //           />
  //           <h1 className="font-bold text-base">{course.title}</h1>
  //           <p>{course.instructors}</p>
  //           <p>Ksh. {course.price}</p>
  //         </li>
  //       </ul>
  //     </div>
  //   );
  // });
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
  //   <div className="ml-10">
  //     <h2 className="font-bold text-2xl pb-5 mt-6">Enrolled Course</h2>
  //     <div className="flex mb-10">
  //       <img src={courses[0].image_url} alt="Abojani" />

  //       <div className="w-96">
  //         <h3 className="font-bold text-xl">{courses[0].title}</h3>
  //         {/* <p>{first.description}</p> */}
  //         <br />
  //         <h5 className="font-bold text-lg">Instructors</h5>
  //         <p>{courses[0].instructors}</p>
  //         <br></br>
  //         <h4 className="font-bold">Enrolled students</h4>
  //         <p>10k +</p>
  //       </div>
  //     </div>

  //     <h3 className="font-bold text-2xl">All Courses</h3>
  //     <div className="flex pr-5">{eachCourse}</div>
  //   </div>
  // );
}

export default Courses;
