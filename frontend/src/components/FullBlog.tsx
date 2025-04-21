import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./Avatar"
import { LineComponent } from "./LineComponent"


export const FullBlog = ({blog}: {blog: Blog}) =>{

    return <div>
            <Appbar/>
            <div className="md:grid grid-cols-12 px-10 pt-10 flex flex-col">
                <div className="md:col-span-8 md:col-start-2 md:col-end-8 col-span-11 col-start-2 pb-4">
                    <div className="font-bold text-2xl md:text-4xl">
                        {blog.title}
                    </div>
                    <div className="pt-2 text-slate-500">
                        Published on 2nd April 2024
                    </div>
                    <div className="pt-2 text-sm md:text-base">
                        {blog.content}
                    </div>
                </div>

                <div className="col-span-4 col-start-9">
                    <div className="md:invisible visible">
                        <LineComponent/>
                    </div>
                    <div className="font-semibold text-slate-700 text-md pt-2">
                        Author
                    </div>
                    <div className="flex">
                        <div className="flex flex-col justify-center pr-3">
                            <div >
                                <Avatar size="min" authorName={blog.author.name || "Anynomous"}/>
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">
                                {blog.author.name || "Anynomous"}
                            </div>
                            <div className="text-sm text-slate-600 pt-1">
                                Random catch phrase about the author's  ability  to grab the user's attention
                            </div>
                         </div>
                    </div>
                </div>
            </div>
    </div>
}