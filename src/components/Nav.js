import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";

export default async function Nav({profileRes}) {
    const { userId } = auth();
   
    return (
        <nav>
          <Link href="/">Home</Link>
          {userId && <UserButton afterSignOutUrl="/" />}
        </nav>
    )
}
