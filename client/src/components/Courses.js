import React, { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  let first = courses[Object.keys(courses)[3]];

  const eachCourse = courses.map((course, index) => {
    return (
      <div>
        <ul>
          <li key={index} className="w-64 pr-5 pt-5">
            <img
              className="rounded-lg mb-2.5"
              src={course.image}
              alt="Abojani"
            />
            <h1 className="font-bold text-base">{course.title}</h1>
            <p>
              {course.instructor[0]}, {course.instructor[1]}
            </p>
            <p>Ksh. {course.price}</p>
          </li>
        </ul>
      </div>
    );
  });
  return (
    <div className="ml-10">
      <h2 className="font-bold text-2xl pb-5 mt-6">Enrolled Course</h2>
      <div className="flex mb-10">
        <iframe
          className="rounded-lg w-96 mr-10 "
          // src={first.video}
          title="Ruger - Girlfriend (Official Video)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* <div className="w-96 mt-10 h-3 bg-yellow-500 rounded-lg">
          <div className="videoPlayed"></div>
        </div> */}
        <div className="w-96">
          <h3 className="font-bold text-xl">{first.title}</h3>
          <p>{first.description}</p>
          <br />
          <h5 className="font-bold text-lg">Instructors</h5>
          <p>
            {first.instructor[0]}, {first.instructor[1]}
          </p>
          <br></br>
          <h4 className="font-bold">Enrolled students</h4>
          <p>10k +</p>
        </div>
      </div>

      <h3 className="font-bold text-2xl">All Courses</h3>
      <div className="flex pr-5">{eachCourse}</div>
    </div>
  );
}

export default Courses;
