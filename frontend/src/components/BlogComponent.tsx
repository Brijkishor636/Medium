import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"
import CircleComponent from "./Circle"
import { LineComponent } from "./LineComponent"

interface BlogCardType {
    title: string,
    content: string,
    authorName: string,
    publishedDate: string,
    id: number
}

export const BlogCard = ({title, content, publishedDate, authorName, id}: BlogCardType) =>{
    return <div className="pt-4 grid grid-cols-12">
        <div className="col-span-12 sm:col-start-3 sm:col-span-8 lg:col-start-4 lg:col-span-6">  
            <div>
                <div className="flex">
                    <div>
                        <Avatar authorName = {authorName} size="min"/>
                    </div>
                    <div className="flex flex-col justify-center items-center text-sm pl-2 pt-1 text-gray-800">
                        {authorName}
                    </div>
                    <div className="flex flex-col justify-center items-center pl-2 pt-2"><CircleComponent/></div>
                    <div className="flex flex-col justify-center items-center pl-2 text-sm text-slate-400 pt-1">
                        {publishedDate}
                    </div>
                </div>
                <Link to={`/blog/${id}`}>
                <div className="cursor-pointer">
                    <div className="text-2xl font-bold mt-1">
                        {title}
                    </div>
                    <div className="text-gray-600 pt-1">
                        {content.slice(0,100) + "..."}
                    </div>
                </div>
                </Link>
            </div>
            
        <div className="text-sm text-slate-400 pt-4">
            {`${Math.ceil(content.length/100)} minute(s) read`}
        </div>
        <div className="pt-3">
            <LineComponent/>
        </div>
        </div>
    </div>
}




