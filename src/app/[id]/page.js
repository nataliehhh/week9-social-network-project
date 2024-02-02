import { auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import Follow from "@/components/Follow";

export default async function ProfilePage({params}) {
    const { userId } = auth();
    const currentProfileRes = await sql`
        SELECT * FROM profiles WHERE clerk_user_id = ${userId}`
    const currentProfileId = currentProfileRes.rows[0].id
  
    const profileRes = await sql`
    SELECT * FROM profiles 
    WHERE profiles.id = ${params.id}`;
    const profilePage = profileRes.rows[0];
  
    // const profileImage = profileRes.rows[0].image;
    // const currentAvatarImage = user.imageUrl;
    // if (profileImage !== currentAvatarImage) {
    //     await sql`
    //       UPDATE profiles SET image = ${currentAvatarImage} WHERE id = ${profileId}`;
    // }

    return (
        <div>
            <h2>Profile page for {profilePage.user_name}</h2>
            <Follow currentProfileId={currentProfileId} profilePage={profilePage} />
        </div>

    )
}