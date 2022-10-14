import React, { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [firstImage,setFirstImage]=useState()
  const[firstTitle,setFirstTitle]=useState()
  const[instructors,setInstructors]=useState()


  // let first = courses[Object.keys(courses)[3]];

  useEffect(() => {
    fetch("/courses")
      .then((r) => r.json())
      .then((data)=>{
        setCourses(data)
        setFirstImage(data[0].image_url)
        setFirstTitle(data[0].title)
        setInstructors(data[0].instructors)});

  },[]);


  const eachCourse =courses.map((course, index) => {
    return (
      <div key={index} >
        <ul>
          <li className="w-64 pr-5 pt-5">
            <img
              className="rounded-lg mb-2.5"
              src={course.image_url}
              alt="Abojani"
            />
            <h1 className="font-bold text-base">{course.title}</h1>
            <p>{course.instructors}</p>
            <p>Ksh. {course.price}</p>
          </li>
        </ul>
      </div>
    );
  });

  
  return (
    <div className="ml-10 ">
      <h2 className="font-bold text-2xl pb-5 mt-6">Enrolled Course</h2>
      <div className="flex mb-10">
        <img src={firstImage} alt="Abojani" />

        <div className="w-96">
          <h3 className="font-bold text-xl"> {firstTitle}</h3>
          {/* <p>{first.description}</p> */}
          <br />
          <h5 className="font-bold text-lg">Instructors</h5>
          <p> {instructors}</p>
          <br></br>
          <h4 className="font-bold">Enrolled students</h4>
          <p>10k +</p>
        </div>
      </div>

      <h3 className="font-bold text-2xl">All Courses</h3>
      <div className="flex mr-32  h-fit flex-row  pr-5">{eachCourse}</div>
    </div>
  );
  }

export default Courses;
