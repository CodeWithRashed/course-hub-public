import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import SidebarCard from "./SidebarCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Homepage = () => {
  const [courseData, setCourseData] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [creditHr, setCreditHr] = useState();
  const [totalCoursePrice, setTotalCoursePrice] = useState();

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
      return toast.error("Already Added");
    }

    let initialCreditHr = course.course_hours;
    const totalCreditHr = selectedCourse.reduce(
      (accumulator, course) => accumulator + course.course_hours,
      initialCreditHr
    );

    if (totalCreditHr > 20) {
      return toast.error("Max Credit Hour Reach");
    }
    setCreditHr(totalCreditHr);
    setSelectedCourse([...selectedCourse, course]);
    let initialCoursePrice = course.course_price;
    const totalCoursePrice = selectedCourse.reduce(
      (accumulator, course) => accumulator + course.course_price,
      initialCoursePrice
    );
    setTotalCoursePrice(totalCoursePrice);
  };

  return (
    <div className="container flex flex-col lg:flex-row gap-4">
      <ToastContainer />
      <div className="card-container lg:w-[75%] grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {courseData.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            handelSelect={handelSelect}
          ></CourseCard>
        ))}
      </div>
      <div className="sidebar lg:w-[30%]">
        <SidebarCard
          selectedCourse={selectedCourse}
          creditHr={creditHr}
          totalCoursePrice={totalCoursePrice}
        ></SidebarCard>
      </div>
    </div>
  );
};

export default Homepage;
