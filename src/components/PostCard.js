import { revalidatePath } from "next/cache";
import { sql } from "@vercel/postgres";
import UserInfo from "@/components/UserInfo";
import Likes from "@/components/Likes";
import Comments from "@/components/Comments";
import DeleteButton from "@/components/DeleteButton";
import EditPost from "@/components/EditPost";

export default function PostCard({post, profileId}) {

    async function handleDeletePost() {
        "use server";
        await sql`
            DELETE FROM posts WHERE id = ${post?.id}`;
        revalidatePath("/");
    }

    async function handleUpdatePost(formData) {
        "use server"
        const newPost = formData.get("post");

        await sql`UPDATE posts SET post = ${newPost} WHERE id = ${post?.id}`;
        revalidatePath("/");
    }

    return (
        <div className="postCard">
            <UserInfo post={post} />
            <div className="postCardButtonArea">
            <Likes post={post} profileId={profileId} />
            {profileId === post?.profile_id && 
            <DeleteButton handleDeletePost={handleDeletePost}/>}
            {profileId === post?.profile_id && 
            <EditPost handleUpdatePost={handleUpdatePost} post={post}/>}
            </div>

            <p>{post?.post}</p>
            <Comments post={post} profileId={profileId} />
            
        </div>
    )
}
