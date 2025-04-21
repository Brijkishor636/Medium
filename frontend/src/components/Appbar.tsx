import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"
import { LineComponent } from "./LineComponent"

export const Appbar = () =>{
    return <div>
            <div className="flex justify-between px-10 py-4">
                <Link to={"/blog"} className="text-xl font-bold flex flex-col justify-center cursor-pointer">
                    Medium
                </Link>
                <div className="flex">
                    <Link to={"/publish"} className="flex flex-col justify-center mr-5">
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2 text-center cursor-pointer">New</button>
                    </Link>
                    <Avatar authorName= "Brij Kishor Kumar" size="max"/>
                </div>
            </div>
            <div>
                <LineComponent/>
            </div>
    </div>
}