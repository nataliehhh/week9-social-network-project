export default function LikeButton({posts_id, profileId, handleLike}) {
    console.log("posts_id:", posts_id)
    console.log("profileId:", profileId)


    return (
        <form action={handleLike}>
            <button>Like</button>
        </form>
    )
}