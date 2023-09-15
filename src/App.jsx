import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <div className="app-container px-4 py-4 md:px-8 md:py-8 lg:px-12 lg:py-12 bg-[#F3F3F3]">
        <div className="title text-[#1C1B1B] text-3xl font-bold mb-8 text-center">
          Course Registration
        </div>
        <Homepage></Homepage>
      </div>
    </>
  );
}

export default App;
