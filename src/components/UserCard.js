import UserAvatar from "@/components/UserAvatar";
import Link from "next/link";

export default function UserCard({profileId, user}) {
    
    return (
        <div className="userInfo">
            <UserAvatar user={user} />
            <Link href={`/${user?.id}`}>{user?.user_name}</Link>
        </div>
    )
}
