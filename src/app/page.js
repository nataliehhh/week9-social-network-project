import PostForm from "@/components/PostForm";
import PostFeed from "@/components/PostFeed";
import UserFeed from "@/components/UserFeed";
import { auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";

export default async function Homepage() {
  const { userId } = auth();
  const profileRes = await sql`
    SELECT * FROM profiles WHERE clerk_user_id = ${userId}`;
  const profileId = profileRes.rows[0].id;
  console.log("profileId", profileId)
  return (
      <div>
        <h2>Homepage</h2>
        <PostForm profileId={profileId} />
        <PostFeed profileId={profileId} />
        <UserFeed profileId={profileId} />
      </div>
  )
}
