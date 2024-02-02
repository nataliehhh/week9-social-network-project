import UserInfo from "@/components/UserInfo";

export default function PostCard({post}) {
  

    return (
        <div className="postCard">
            <UserInfo post={post} />
            <p>{post?.post}</p>
        </div>
    )
}
// use dialog to expand post and show comments?