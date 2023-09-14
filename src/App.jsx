import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <div className="app-container px-12 py-12 bg-[#F3F3F3]">
        <div className="title text-[#1C1B1B] text-3xl font-bold mb-8 text-center">
          Course Registration
        </div>
        <Homepage></Homepage>
      </div>
    </>
  );
}

export default App;
