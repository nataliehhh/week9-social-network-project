import { sql } from "@vercel/postgres";
// import PostFeedTab from "@/components/PostFeedTab";
import AllPosts from "@/components/AllPosts";
import FollowedPosts from "@/components/FollowedPosts";

export default async function PostFeed({profileId, showFollowedFeed }) {
    const postsRes = await sql`
    SELECT posts.id, posts.post, posts.profile_id, profiles.user_name, profiles.image
    FROM posts
    JOIN profiles ON posts.profile_id = profiles.id
    ORDER BY posts.id DESC`;
    const allPosts = postsRes.rows;

    const followsRes = await sql`
        SELECT * FROM follows WHERE follower_id = ${profileId}`;
    const follows = followsRes.rows;

    return (
        <div>
            {!showFollowedFeed && <AllPosts profileId={profileId} allPosts={allPosts}/>}
            {showFollowedFeed && <FollowedPosts follows={follows} profileId={profileId} allPosts={allPosts}/>}
        </div>
    );
}
