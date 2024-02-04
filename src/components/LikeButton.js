export default function LikeButton({handleLike}) {

    return (
        <form action={handleLike}>
            <button>Like</button>
        </form>
    )
}