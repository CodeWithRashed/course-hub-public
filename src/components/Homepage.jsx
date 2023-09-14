import CourseCard from "./CourseCard";
import SidebarCard from "./SidebarCard";

const Homepage = () => {
  return (
    <div className="container flex flex-col lg:flex-row gap-4">
      <div className="card-container w-[75%] grid grid-cols-3 gap-2">
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
      </div>
      <div className="sidebar w-[28%]">
        <SidebarCard></SidebarCard>
      </div>
    </div>
  );
};

export default Homepage;
