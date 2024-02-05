// import { auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export default async function Follow({profilePage, currentProfileId}) {
    console.log( "profilePage", profilePage)
    const followRes = 
        await sql`SELECT * FROM follows WHERE follower_id = ${currentProfileId} AND followee_id = ${profilePage.id}`
    const followStatus = followRes.rows.length === 0 ? false : true;
    
    async function handleFollow() {
        "use server";
        if (!followStatus) {
            await sql`
              INSERT INTO follows (follower_id, followee_id) VALUES (${currentProfileId}, ${profilePage.id})`;
        } else {
            await sql`
                DELETE FROM follows WHERE follower_id = ${currentProfileId} AND followee_id = ${profilePage.id}`
        }
        revalidatePath(`/${profilePage.id}`);
    }

    
    return (
        <form action={handleFollow}>
            <button>{followStatus ? "Unfollow" : "Follow"}</button>
        </form>
    )
}