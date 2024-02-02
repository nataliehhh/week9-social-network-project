import Image from "next/image";
import "@/css/profileAvatar.css";

export default function ProfileAvatar({post}) {

    return (
            <Image 
            src={post?.image}
            alt={post?.user_name}
            width={100}
            height={100}
            className="profileAvatar"
            />
    )
}