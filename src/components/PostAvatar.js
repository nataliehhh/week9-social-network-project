import Image from "next/image";
import placeholder from "@/../public/placeholder-avatar.jpg"

export default function PostAvatar({post}) {
    console.log("post.image", post.image)

    return (
        <div>
        {post?.image === null ? (
             <Image 
             src={placeholder}
             alt="placeholder"
             width={100}
             height={100}
             className="profileAvatar"
             />
        ) : (
            <Image 
            src={post?.image}
            alt={post?.user_name}
            width={100}
            height={100}
            className="profileAvatar"
            />
        )}
        </div>
    )
}