import { FiBookOpen } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
const CourseCard = () => {
  return (
    <div className="card bg-white p-4 rounded-xl space-y-3">
      <div className="img">
        <img
          className="rounded-xl"
          src="https://img-c.udemycdn.com/course/750x422/1565838_e54e_16.jpg"
          alt=""
        />
      </div>
      <h1 className="font-bold text-[#1C1B1B] text-lg">
        Introduction to C Programming
      </h1>
      <p className="text-[#1C1B1B90] text-base">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className="course-details flex justify-between items-center">
        <div className="text-xl flex justify-center items-center">
          <MdAttachMoney />
          <h1 className="text-base text-[#1C1B1B99] font-bold">
            Price : 15000
          </h1>
        </div>
        <div className="text-xl flex justify-center items-center gap-1">
          <FiBookOpen />
          <h1 className="text-base text-[#1C1B1B99] font-bold">Credit : 1hr</h1>
        </div>
      </div>
      <button className="p-2 bg-[#2F80ED] w-full rounded-lg text-white font-bold">
        Select
      </button>
    </div>
  );
};

export default CourseCard;
