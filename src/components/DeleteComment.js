import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import DeleteCommentButton from "./DeleteCommentButton";

export default async function DeleteComment({ comment }) {
    console.log("comment on deleteComment:", comment)
    async function handleDeleteComment() {
        "use server";
        await sql`
            DELETE FROM posts_comments WHERE posts_comments.id = ${comment.id}`
        revalidatePath("/");
    }

    return (
        <DeleteCommentButton handleDeleteComment={handleDeleteComment} />
    )
}