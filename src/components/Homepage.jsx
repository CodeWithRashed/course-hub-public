import SidebarCard from "./SidebarCard";

const Homepage = () => {
  return (
    <div className="container flex flex-col lg:flex-row gap-8">
      <div className="card-container  border-2 border-red-200 w-8/12 ">
        Course Cards
      </div>
      <div className="sidebar w-1/3">
        <SidebarCard></SidebarCard>
      </div>
    </div>
  );
};

export default Homepage;
