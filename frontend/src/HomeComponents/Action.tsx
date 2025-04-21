
import React from "react";
import { useNavigate } from "react-router-dom";

const ActionSection: React.FC = () => {
    const navigate = useNavigate();
  return (
    <section className="bg-blue-400 py-12 px-6 shadow-md text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Enjoying the Content?</h2>
      <p className="text-lg mb-6">
        Signup to get all the features for our blogs, and tips right in your inbox.
      </p>
      <button onClick={()=>{
            navigate("/signup");
        }} className="bg-white text-blue-400 font-semibold py-2 px-6 rounded-full shadow hover:bg-blue-100 transition duration-300 cursor-pointer">
        Signup
      </button>
    </section>
  );
};

export default ActionSection;
