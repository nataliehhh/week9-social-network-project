import { sql } from "@vercel/postgres";
import PostFeedTab from "@/components/PostFeedTab";

export default async function PostFeed({profileId}) {
    const postsRes = await sql`
    SELECT posts.id, posts.post, posts.profile_id, profiles.user_name, profiles.image
    FROM posts
    JOIN profiles ON posts.profile_id = profiles.id
    ORDER BY posts.id DESC`;
    const allPosts = postsRes.rows;
    // console.log("allPosts", allPosts);

    return (
            <PostFeedTab allPosts={allPosts} />
    );
}
