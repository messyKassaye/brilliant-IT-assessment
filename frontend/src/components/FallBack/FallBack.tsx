import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const FallBack = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h3 className="text-red-500">Error</h3>
      <pre className="text-red-500">
        Something is not good. please try again
      </pre>
      <Button onClick={navigateToHome}>Try again</Button>
    </div>
  );
};

export default FallBack;
