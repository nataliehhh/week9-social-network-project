import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";

export default async function Nav() {
    const { userId } = auth();
    return (
        <div>
          {userId && <UserButton afterSignOutUrl="/" />}
          {!userId && <Link href="/sign-in">Sign In</Link>}
        </div>
    )
}
