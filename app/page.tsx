import TheadComponent from "./components/section-components/theadComponent/TheadComponent";
import TbodyComponent from "./components/section-components/TbodyComponent/TbodyComponent";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-screen-2xl md:w-full  max-md:w-screen">
          <table className="min-w-full divide-y divide-gray-200">
            <TheadComponent />
            <TbodyComponent />
          </table>
        </div>
      </div>
    </>
    
  );
}

// <div className="flex justify-center items-center h-screen"></div>
//   <div className="overflow-x-auto">
//     <table className="min-w-full divide-y divide-gray-200">