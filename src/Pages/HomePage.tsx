import { Link, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="py-10 mb-10 w-full flex items-center justify-center flex-col gap-10 border-b-2 border-gray-500">
        <div className="py-12">
          <h1 className="text-3xl font-semibold ">
            The best React template out of the box
          </h1>
        </div>
        <Link
          to="/nested"
          className="px-3 py-1 bg-blue-500 rounded-md text-white  hover:bg-blue-600 transition-all duration-100"
        >
          Go to the nested route
        </Link>
        <button color="primary" onClick={() => navigate("/buttons")}>
          Check the buttons components
        </button>
      </div>
    </>
  );
};
