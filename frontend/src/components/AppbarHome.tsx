import { Avatar } from "./Avatar"
import { LineComponent } from "./LineComponent"

export const AppbarHome = () => {
    return <div>
        <div className="flex justify-between px-10 py-4">
                <div className="text-xl font-bold flex flex-col justify-center">
                    Medium
                </div>
                <div className="flex">
                    <Avatar authorName= "Brij Kishor Kumar" size="max"/>
                </div>
            </div>
            <div>
                <LineComponent/>
            </div>
    </div>
}