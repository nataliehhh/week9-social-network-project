import { sql } from "@vercel/postgres";
import { currentUser } from "@clerk/nextjs";
import AllUsers from "@/components/AllUsers";
import FollowedUsers from "@/components/FollowedUsers";

export default async function UserFeed({profileId, showFollowedFeed}) {
    const user = await currentUser();
    const currentAvatarImage = user.imageUrl;
    // console.log("clerk img url", currentAvatarImage)

    const profilesRes = await sql`
    SELECT * FROM profiles`;
    const allProfiles = profilesRes.rows
    // console.log("allProfiles", allProfiles);

    const followsRes = await sql`
    SELECT * FROM follows WHERE follower_id = ${profileId}`;
    const follows = followsRes.rows;

    return (
        <div>
            {!showFollowedFeed && <AllUsers allProfiles={allProfiles} profileId={profileId} />}
            {showFollowedFeed && <FollowedUsers allProfiles={allProfiles} follows={follows} profileId={profileId} />}
        </div>
    )
}

