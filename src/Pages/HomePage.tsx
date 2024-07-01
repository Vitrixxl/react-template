import { Link, Outlet } from "react-router-dom";
export const HomePage = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-10">
      <div className="py-12">
        <h1 className="text-3xl font-semibold text-blue-900">
          The best React template out of the box
        </h1>
      </div>
      <Link
        to="/nested"
        className="px-3 py-1 bg-blue-500 rounded-md text-white  hover:bg-blue-600 transition-all duration-100"
      >
        Go to the nested route
      </Link>

      <Outlet />
    </div>
  );
};
