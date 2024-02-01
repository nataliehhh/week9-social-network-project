import SaveButton from "@/components/SaveButton";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function PostForm({profileId}) {

    async function handleAddPost(formData) {
        "use server";
        console.log("Saving post to the database...");

        const post = formData.get("post");       

        await sql`INSERT INTO posts (post, profile_id) VALUES (${post}, ${profileId})
        `;
        revalidatePath("/");
        redirect("/");
    }

    return (
        <div className="postFormArea">
            <form className="postForm" action={handleAddPost}>
                <label htmlFor="post">Add a Post</label>
                 <textarea id="post" name="post" type="text" maxLength="500" required></textarea>

                <SaveButton />
            </form> 
    </div>
    )
}
