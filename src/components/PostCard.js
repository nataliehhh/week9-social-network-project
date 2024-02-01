export default function PostCard({post}) {
    console.log("post prop", post)
    return (
        <div className="postCard">
            <h3>{post.user_name}</h3>
            <p>{post.post}</p>
        </div>
    )
}
// use dialog to expand post and show comments?