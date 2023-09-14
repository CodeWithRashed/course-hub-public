import PropTypes from "prop-types";
import { FiBookOpen } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
const CourseCard = ({ course, handelSelect }) => {
  return (
    <div className="card bg-white p-4 rounded-xl space-y-3 flex flex-col justify-between">
      <div className="space-y-3">
        <div className="img">
          <img className="rounded-xl" src={course.course_image} alt="" />
        </div>
        <h1 className="font-bold text-[#1C1B1B] text-lg">
          {course.course_title}
        </h1>
      </div>

      <p className="text-[#1C1B1B90] text-base">
        {course.small_course_description}
      </p>
      <div>
        <div className="course-details flex justify-between items-center">
          <div className="text-xl flex justify-center items-center">
            <MdAttachMoney />
            <h1 className="text-base text-[#1C1B1B99] font-semibold">
              Price : {course.course_price}
            </h1>
          </div>
          <div className="text-xl flex justify-center items-center gap-1">
            <FiBookOpen />
            <h1 className="text-base text-[#1C1B1B99] font-semibold">
              Credit : {course.course_hours}hr
            </h1>
          </div>
        </div>
        <button
          onClick={() => handelSelect(course)}
          className="p-2 mt-3 bg-[#2F80ED] w-full rounded-lg text-white font-bold"
        >
          Select
        </button>
      </div>
    </div>
  );
};
CourseCard.propTypes = {
  course: PropTypes.object,
  handelSelect: PropTypes.func,
};

export default CourseCard;
