import { auth, currentUser } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import SaveButton from "@/components/SaveButton";
import { redirect } from "next/navigation";

export default async function EditProfile({params}) {
    console.log("params.id:", params.id)
    const { userId } = auth();
    const user = currentUser();
    const currentAvatarImage = user.imageUrl;

    const themeOptions = await sql`
        SELECT * FROM theme`;

    const profileRes = await sql`
        SELECT * FROM profiles WHERE clerk_user_id = ${userId}`;
    const profile = profileRes.rows[0];

    async function handleEditProfile(formData) {
        "use server";

        const user_name = formData.get("user_name");
        const email = formData.get("email");
        const age = formData.get("age");
        const location = formData.get("location");
        const zodiac = formData.get("zodiac");
        const quote = formData.get("quote");
        const mood = formData.get("mood");
        const theme_id = formData.get("theme");

        await sql`UPDATE profiles SET user_name = ${user_name}, email = ${email}, age = ${age}, location = ${location}, zodiac = ${zodiac}, quote = ${quote}, mood = ${mood}, theme_id = ${theme_id}, image = ${currentAvatarImage} WHERE id = ${params.id}`;
        revalidatePath(`/${params.id}/settings`);
        redirect(`/${params.id}`);
    }

    return (
        <div className="editProfile">
            <h2>Edit your profile information:</h2>
            <form className="editProfileForm" action={handleEditProfile}>
                <label htmlFor="user_name">Username</label>
                <input id="user_name" name="user_name" type="text" defaultValue={profile.user_name} required />
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="text" defaultValue={profile.email} />
                <label htmlFor="age">Age</label>
                <input id="age" name="age" type="number" defaultValue={profile.age}/>
                <label htmlFor="location">Location</label>
                <input id="location" name="location" type="text" defaultValue={profile.location}/>
                <label htmlFor="zodiac">Zodiac</label>
                <input id="zodiac" name="zodiac" type="text" defaultValue={profile.zodiac}/>
                <label htmlFor="quote">Quote</label>
                <input id="quote" name="quote" type="text" defaultValue={profile.quote} />
                <label htmlFor="Mood">Mood</label>
                <input id="Mood" name="Mood" type="text" defaultValue={profile.mood}/>

                <label htmlFor="theme">Theme</label>
                <select id="theme" name="theme" defaultValue={profile.theme_id} required >
                 {themeOptions.rows.map((theme) => (
                   <option key={theme.id} value={theme.id}>{theme.theme}
                   </option>
                 ))}
                </select>

                <SaveButton />
            </form> 
    </div>
    )
}