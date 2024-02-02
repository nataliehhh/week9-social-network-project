import PostForm from "@/components/PostForm";
import PostFeed from "@/components/PostFeed";
import UserFeed from "@/components/UserFeed";
import { auth, currentUser } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import "@/css/homepage.css"

export default async function Homepage() {
  const { userId } = auth();
  const user = await currentUser();

  const profileRes = await sql`
  SELECT * FROM profiles WHERE clerk_user_id = ${userId}`;
  const profileId = profileRes.rows[0].id;
  console.log("profileId", profileId)

  const profileImage = profileRes.rows[0].image;
  const currentAvatarImage = user.imageUrl;
  if (profileImage !== currentAvatarImage) {
      await sql`
        UPDATE profiles SET image = ${currentAvatarImage} WHERE id = ${profileId}`;
  }
  
  return (
      <div className="homepage">
        <h2>Homepage</h2>
        <PostForm profileId={profileId} />
        <PostFeed profileId={profileId} />
        <UserFeed profileId={profileId} />
      </div>
  )
}
