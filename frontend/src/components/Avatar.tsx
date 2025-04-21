
interface AvatarInput {
    authorName: string,
    size: "min" | "max"
}

export const Avatar = ({authorName, size}: AvatarInput) =>{
    return <div className={`flex flex-col items-center justify-center overflow-hidden bg-gray-300 rounded-full ${size === "min" ? "w-6 h-6" : "w-9 h-9"}`}>
    <div className={`${size === "min" ? "text-sm" : "text-xl"} font-semibold text-gray-500`}>
        {authorName[0]}
    </div>
</div>
}