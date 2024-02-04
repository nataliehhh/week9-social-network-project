import { sql } from "@vercel/postgres";
import LikeButton from "@/components/LikeButton"
import { revalidatePath } from "next/cache";

export default async function Likes({post, profileId}) {
    const post_id = post?.id
    const likesNum = await sql`
    SELECT * FROM posts_likes WHERE posts_id = ${post_id}`
    
    const likesRes = await sql`
    SELECT * FROM posts_likes WHERE posts_id = ${post_id} AND profile_id = ${profileId}`;
    const liked = likesRes.rows.length === 0 ? false : true;
   
    async function handleLike() {
        "use server";
    
        if (!liked) {
          await sql`INSERT INTO posts_likes (profile_id, posts_id) VALUES (${profileId}, ${post_id})`
        } else {
            await sql`DELETE FROM posts_likes WHERE profile_id = ${profileId} AND posts_id = ${post_id}`;
        }
        revalidatePath("/");
    }

    return (
        <div>
            <p>{likesNum.rows.length} Likes</p>
            <LikeButton handleLike={handleLike} />
        </div>
    );
}