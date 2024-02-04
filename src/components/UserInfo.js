import ProfileAvatar from "@/components/ProfileAvatar";
import Link from "next/link";

export default function UserInfo({post}) {
    
    return (
        <div className="userInfo">
            <ProfileAvatar post={post} />
            <Link href={`/${post?.profile_id}`}>{post?.user_name}</Link>
        </div>
    )
}