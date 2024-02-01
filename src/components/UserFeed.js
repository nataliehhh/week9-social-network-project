import { sql } from "@vercel/postgres";
import { currentUser } from "@clerk/nextjs";
import UserFeedTab from "@/components/UserFeedTab";

export default async function UserFeed({profileId}) {
    const user = await currentUser();
    const currentAvatarImage = user.imageUrl;
    // console.log("clerk img url", currentAvatarImage)

    const profilesRes = await sql`
    SELECT * FROM profiles`;
    const allProfiles = profilesRes.rows
    // console.log("allProfiles", allProfiles);

    return (
        <UserFeedTab allProfiles={allProfiles} />
    )
}

