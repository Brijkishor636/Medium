import { useNavigate } from "react-router-dom";

const WelcomeBanner = () => {
    const navigate = useNavigate();
    return (
      <div className="bg-blue-400 shadow-md p-15 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome to My Blog!</h1>
        <p className="text-white text-lg">
          Sharing thoughts, tutorials, and ideas on web development, tech, and more.
        </p>
        <button onClick={()=>{
            navigate("/signup");
        }} className="bg-white text-blue-400 font-semibold py-2 px-6 rounded-full shadow hover:bg-blue-100 transition duration-300 mt-10 cursor-pointer">
        Get Started
      </button>
      </div>
    );
  };
  
  export default WelcomeBanner;
  