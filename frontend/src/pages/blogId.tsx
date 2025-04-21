import { useParams } from "react-router-dom"
import { FullBlog } from "../components/FullBlog"
import { useBlog } from "../hooks"
import { Spinner } from "../components/Spinner";

export const BlogId = () =>{

    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    })

    if(loading || !blog){

        return <div className="flex justify-center text-center">
                <div className="justify-center">
                    <Spinner/>
                </div>
            </div>
    }

    return <div>
        <FullBlog blog={blog}/>
    </div>
}