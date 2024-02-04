import { sql } from "@vercel/postgres";
import CommentForm from "@/components/CommentForm";
// import EditCommentButton from "@/components/EditCommentButton"
import { revalidatePath } from "next/cache";
import DeleteComment from "./DeleteComment";

export default async function Comments({ profileId, post }) {
    const currentProfile = await sql`
    SELECT * FROM profiles WHERE id = ${profileId}`

    const comments = await sql`
    SELECT posts_comments.id, posts_comments.comment, posts_comments.profile_id, posts_comments.posts_id, profiles.user_name
    FROM posts_comments
    JOIN profiles ON posts_comments.profile_id = profiles.id
    WHERE posts_comments.posts_id = ${post?.id}`;

    async function handleAddComment(formData) {
        "use server";
        console.log("Saving comment to the database...");

        const comment = formData.get("comment");

        const newComment = await sql`INSERT INTO posts_comments (comment, profile_id, posts_id) VALUES (${comment}, ${currentProfile.rows[0].id}, ${post?.id})
        RETURNING id;
        `;
        const newCommentId = newComment.rows[0].id;
        revalidatePath("/");
    }

    // async function handleUpdateComment(formData) {
    //     "use server";
    //     console.log("Updating comment to the database...");

    //     const comment = formData.get("comment");
    //     const comment_id = formData.get("comment_id");

    //     await sql`UPDATE posts_comments SET comment = ${comment} WHERE id = ${commentId};
    //     `;
    //     revalidatePath("/");
    // }

    return (
        <div className="commentsArea">
            <CommentForm handleAddComment={handleAddComment} currentProfile={currentProfile} post={post} />
                {comments.rows.map((comment) => (
                    <div className="comment" key={comment.id + comment.post_id}>
                    <h3>{comment.user_name} commented:</h3>
                    <p>{comment.comment}</p>
                    {profileId === comment.profile_id && <DeleteComment comment={comment} />}
                    {/* <EditCommentButton comment={comment} commentId={comment.id} params={params} handleUpdateComment={handleUpdateComment}/> */}
                    </div>
                ))}
        </div>
    )
}