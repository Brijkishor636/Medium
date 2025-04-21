import { useState } from "react"
import { Appbar } from "../components/Appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const Publish = () =>{

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    async function newFunction(){
        let response;
            try {
                response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                    title,
                    content
                },{
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                })
                console.log(response);
                toast.success(response.data.msg, {
                    position: "top-center"
                })
                navigate("/blog");

            } catch (error) {
                console.log(error);
                toast.error("Error during creating blog!!", {
                    position: "top-center"
                })
            } 
    }


    return <div>
            <Appbar/>
        <div className="flex flex-col justify-center items-center pt-10 p-4">
            <input type="text" id="first_name" onChange={(e)=>{
                setTitle(e.target.value)
            }} className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none max-w-md" placeholder="Title..." required />
            <textarea name="Content" id="" onChange={(e)=>{
                setContent(e.target.value)
            }} className="mt-10 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none max-w-md" rows={8} placeholder="Write a blog..." required></textarea>
            <button type="submit" onClick={newFunction} className="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center cursor-pointer">Post Blog</button>
        </div>
        
    </div>
}