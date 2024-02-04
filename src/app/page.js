import { auth, currentUser } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import PostForm from "@/components/PostForm";
import PostFeed from "@/components/PostFeed";
import UserFeed from "@/components/UserFeed";
import FeedNav from "@/components/FeedNav";
import "@/css/homepage.css";

export default async function Homepage({searchParams}) {
  const { userId } = auth();
  const user = await currentUser();

  const profileRes = await sql`
  SELECT * FROM profiles WHERE clerk_user_id = ${userId}`;
  const profileId = profileRes.rows[0].id;

  const profileImage = profileRes.rows[0].image;
  const currentAvatarImage = user.imageUrl;
  if (profileImage !== currentAvatarImage) {
      await sql`
        UPDATE profiles SET image = ${currentAvatarImage} WHERE id = ${profileId}`;
  }

  const showFollowedFeed = searchParams.feed === "followed" ? true : false;

  return (
      <div className="homepage">
        <div className="pageSidebar">
          <FeedNav profileId={profileId} />
          <PostForm profileId={profileId} />
        </div>
        <PostFeed profileId={profileId} showFollowedFeed={showFollowedFeed} />
        <UserFeed profileId={profileId} showFollowedFeed={showFollowedFeed} />
      </div>
  )
}
