import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="py-10 mb-10 h-screen  flex items-center justify-center flex-col gap-10 border-b-2 border-gray-500">
        <Button padding={"none"}>test</Button>
      </div>
    </>
  );
};
