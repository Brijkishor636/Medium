
import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogComponent"
import { Spinner } from "../components/Spinner";
import { usefetchingBlogs } from "../hooks"

export const Blog = () =>{

    const { loading, blogs } = usefetchingBlogs();

    if(loading){
        return <div className="flex justify-center text-center">
                        <div className="justify-center">
                            <Spinner/>
                        </div>
                    </div>
    }

    return <div>
            <div>
                <Appbar/>
            </div>
    
    <div className="p-5">
            {blogs.map((blog)=>(
                <BlogCard id={blog.id}
                title={blog.title}
                content={blog.content}
                authorName={blog.author.name || "Anonymous"} 
                publishedDate={"3rd may 2024"}
            />
            ))}
            
        </div> 
        </div>
}