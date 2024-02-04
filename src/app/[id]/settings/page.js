import { auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import EditProfile from "@/components/EditProfile";

export default async function ProfileSettingsPage({params}) {
    const { userId } = auth();

    const currentProfile = await sql`
        SELECT * FROM profiles WHERE clerk_user_id = ${userId}`;
    const currentProfileId = "" + currentProfile.rows[0].id

    console.log("currentProfileId on settings", currentProfileId)
    console.log("params.id on settings", params.id)

    if (params.id !== currentProfileId) {
        return <p>You are not logged in, please log in to access your profile settings</p>;
      }

    return (
        <EditProfile params={params} />
    )
}