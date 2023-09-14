import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import SidebarCard from "./SidebarCard";

const Homepage = () => {
  const [courseData, setCourseData] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourseData(data));
  }, []);

  const handelSelect = (course) => {
    let isAlreadyAdded = selectedCourse.find(
      (singleCourse) => singleCourse.id == course.id
    );
    if (isAlreadyAdded) {
      return alert("Already Added");
    }
    setSelectedCourse([...selectedCourse, course]);
  };

  return (
    <div className="container flex flex-col lg:flex-row gap-4">
      <div className="card-container lg:w-[75%] grid grid-cols-3 gap-2">
        {courseData.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            handelSelect={handelSelect}
          ></CourseCard>
        ))}
      </div>
      <div className="sidebar lg:w-[30%]">
        <SidebarCard selectedCourse={selectedCourse}></SidebarCard>
      </div>
    </div>
  );
};

export default Homepage;
