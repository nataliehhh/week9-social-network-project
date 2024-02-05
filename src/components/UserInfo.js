import PostAvatar from "@/components/PostAvatar";
import Link from "next/link";

export default function UserInfo({post}) {
    return (
        <div className="userInfo">
            <PostAvatar post={post} />
            <Link href={`/${post?.profile_id}`}>{post?.user_name}</Link>
        </div>
    )
}