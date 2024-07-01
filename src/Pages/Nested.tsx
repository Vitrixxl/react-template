import { Link } from "react-router-dom";
export const NestedPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg italic text-gray-400 ">
        Component from nested route
      </h1>
      <h2 className="text-md font-bold text-gray-500">
        And of course i'm using tailwind out of the box
      </h2>
      
        <Link to="/" className="px-3 py-1 text-white bg-purple-500 rounded-md w-fit hover:bg-purple-600 transition-all duration-100">Go back</Link>
     
    </div>
  );
};
