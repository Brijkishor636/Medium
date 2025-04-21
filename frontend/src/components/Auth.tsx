import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@brijkishor636/medium-common"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { toast } from "react-toastify"



export const Auth = ({type}: {type: "signup" | "signin"}) =>{

    const navigate = useNavigate();

    const [postInputs, setPostInputs] = useState<SignupInput>({
        email: "",
        password: "",
        name: ""
    })

    async function sendRequest(){
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup": "signin"}`, postInputs);
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            toast.success(response.data.msg, {
                position: "top-center"
            })
            navigate("/blog")
        } catch (error) {
            console.log(error);
            toast.error(`Error during ${type === "signup" ? "signup" : "signin"}`,{
                position: "top-right"
            })
        }
    }

    return <div className="h-screen flex flex-col justify-center items-center">
        <div className="justify-center">
        <div className="flex flex-col justify-center items-center">
            <div className="text-3xl font-bold">
                Create an account
            </div>
            <div className="font-semibold text-slate-500">
                {type === "signin" ? "Don't have an account?" : "Already have an account?"} 
                <Link to={type === "signin" ? "/signup": "/signin"} className="underline ml-2">{type === "signin" ? "Signup": "Login"}</Link>
            </div>
        </div>

            <div className="mt-7">
                {type === "signin"? <div></div>: 
                <div>
                <InputField label={"Name"} placeholder={"Enter your name"} type={"text"} onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }}/>
            </div>}
            
            <div>
                <InputField label={"Email"} placeholder={"abc@gmail.com"} type={"text"} onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                    }}/>
            </div>
            <div>
                <InputField label={"Password"} placeholder={"123456"} type={"password"} onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }}/>
            </div>
            <div>
                <button onClick={sendRequest} type="button" className="text-white hover:bg-slate-700 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg px-5 py-2.5 me-2 mb-2 bg-slate-800 w-full cursor-pointer mt-5">{type === "signup" ? "Sign up" : "Sign in"}</button>
            </div>
            </div>
        </div>
    </div>
}

interface InputType {
    label: String,
    type?: String,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    placeholder: String
}


function InputField({label, placeholder, onChange, type}: InputType){
    return <div>
            <label className="block mb-1 text-sm font-semibold text-gray-900">{label}</label>
            <input onChange={onChange} type={String(type || "text")} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 outline-none mb-4" placeholder={String(placeholder)} required />
        </div>
}