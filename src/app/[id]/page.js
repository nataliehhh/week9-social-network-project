import { auth, currentUser } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import Link from "next/link";
import Follow from "@/components/Follow";
import LargeAvatar from "@/components/LargeAvatar";
import ProfileInfo from "@/components/ProfileInfo";
import "@/css/homepage.css";

export default async function ProfilePage({params}) {
    const { userId } = auth();
    const user = await currentUser();
    
    const currentProfileRes = await sql`
        SELECT * FROM profiles WHERE clerk_user_id = ${userId}`
    const currentProfileId = "" + currentProfileRes.rows[0].id
  
    const profileRes = await sql`
    SELECT * FROM profiles 
    WHERE profiles.id = ${params.id}`;
    const profilePage = profileRes.rows[0];
  
    const currentProfileImage = currentProfileRes.rows[0].image;
    const currentAvatarImage = user.imageUrl;
    if (currentProfileImage !== currentAvatarImage) {
        await sql`
          UPDATE profiles SET image = ${currentAvatarImage} WHERE id = ${currentProfileId}`;
    }
    console.log("currentProfileId", currentProfileId)
    console.log("params.id", params.id)

    return (
        <div className="profilePage">
            <div className="pageSidebar">
            <h2>{profilePage.user_name}&apos;s Profile Page</h2>
            <LargeAvatar profilePage={profilePage} />
            <Follow currentProfileId={currentProfileId} profilePage={profilePage} />
            {currentProfileId === params.id && <Link href={`/${params.id}/settings`}>My Profile Settings</Link>}
            </div>
            <ProfileInfo profilePage={profilePage} />
        </div>

    )
}