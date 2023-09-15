import PropTypes from "prop-types";

const SidebarCard = ({ selectedCourse, creditHr, totalCoursePrice }) => {
  let remainingCreditHr = 20;
  return (
    <div className="container bg-white p-8 rounded-2xl space-y-2 font-Inter">
      <h2 className="text-[#2F80ED] text- font-bold pb-2">
        Credit Hour Remaining{" "}
        {creditHr ? parseInt(remainingCreditHr) - creditHr : 20}hr
      </h2>
      <hr className="h-[1px] bg-[#1C1B1B20] border-0" />
      <div className="course-list space-y-3 py-4">
        <h1 className="text-xl font-bold">Course Name</h1>
        <ul className="list-inside list-decimal text-[#1C1B1B90] space-y-2">
          {selectedCourse.map((course) => (
            <li key={course.id}>{course.course_title}</li>
          ))}
        </ul>
      </div>

      <hr className="h-[1px] bg-[#1C1B1B20] border-0" />
      <h2 className="text-[#1C1B1B90] font-bold py-1">
        Total Credit Hour : {creditHr ? creditHr : 0}hr
      </h2>
      <hr className="h-[1px] bg-[#1C1B1B20] border-0" />
      <h1 className="text-[#1C1B1B98] text-lg font-bold pt-4">
        Total Price : {totalCoursePrice ? totalCoursePrice : 0} USD
      </h1>
    </div>
  );
};

SidebarCard.propTypes = {
  selectedCourse: PropTypes.array,
  creditHr: PropTypes.number,
  totalCoursePrice: PropTypes.number,
};
export default SidebarCard;
