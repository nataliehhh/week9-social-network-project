import Nav from "@/components/Nav";
import { sql } from "@vercel/postgres";
import { auth } from "@clerk/nextjs";

export default async function Header() {
    const { userId } = auth();
    const profileRes = await sql`
    SELECT * FROM profiles WHERE clerk_user_id = ${userId}`;

    return (
        <header>
            <h1>Fetch</h1>
            <Nav profileRes={profileRes}/>
        </header>
    )
}