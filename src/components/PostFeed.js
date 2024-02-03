import { sql } from "@vercel/postgres";
import PostFeedTab from "@/components/PostFeedTab";

export default async function PostFeed({profileId}) {
    const postsRes = await sql`
    SELECT posts.id, posts.post, posts.profile_id, profiles.user_name, profiles.image
    FROM posts
    JOIN profiles ON posts.profile_id = profiles.id
    ORDER BY posts.id DESC`;
    const allPosts = postsRes.rows;

    const followsRes = await sql`
        SELECT * FROM follows WHERE follower_id = ${profileId}`;
    const follows = followsRes.rows;
    console.log("follows", follows)

    async function handleLike(post_id, profileId) {
        "use server";
        const likesNum = await sql`
            SELECT * FROM posts_likes WHERE posts_id = ${post_id}`
        const likesRes = await sql`
            SELECT * FROM posts_likes WHERE posts_id = ${post_id} AND profile_id = ${profileId}`;
        const liked = likedRes.rows.length === 0 ? false : true;
        if (!liked) {
            await sql`INSERT INTO posts_likes (profile_id, posts_id) VALUES (${profileId}, ${post_id})`
        } else {
            await sql`DELETE FROM posts_likes WHERE profile_id = ${profileId} AND post_id = ${post_id}`;
        }
        // return likesNum;
    }

    return (
            <PostFeedTab handleLike={handleLike} follows={follows} profileId={profileId} allPosts={allPosts} />
    );
}
