import { auth, currentUser } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import SaveButton from "@/components/SaveButton";

export default async function CreateProfile() {
    const { userId } = auth();
    const user = currentUser();
    const currentAvatarImage = user.imageUrl;

    const themeOptions = await sql`
    SELECT * FROM theme;
    `;

    async function handleCreateProfile(formData) {
        "use server";
        console.log("Saving post to the database...");

        const user_name = formData.get("user_name");
        const theme_id = formData.get("theme");

        await sql`INSERT INTO profiles (user_name, theme_id, clerk_user_id, image) VALUES (${user_name}, ${theme_id}, ${userId}, ${currentAvatarImage})
        `;
        revalidatePath("/");
        redirect("/");
    }

    return (
        <div className="createProfile">
            <form className="createProfileForm" action={handleCreateProfile}>
                <h2>First time here? Choose a username and theme below!</h2>
                <label htmlFor="user_name">Username</label>
                <input id="user_name" name="user_name" type="text" required />

                 <label htmlFor="theme">Theme</label>
                 <select id="theme" name="theme" required >
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