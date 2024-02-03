import UserInfo from "@/components/UserInfo";
import LikeButton from "./LikeButton";

export default function PostCard({post, profileId, handleLike}) {
    const posts_id = post?.id;

    return (
        <div className="postCard">
            <UserInfo post={post} />
            <p>{post?.post}</p>
            <LikeButton posts_id={posts_id} profileId={profileId} handleLike={handleLike} />
        </div>
    )
}
// use dialog to expand post and show comments?