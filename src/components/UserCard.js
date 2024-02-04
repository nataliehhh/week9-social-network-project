import ProfileAvatar from "@/components/ProfileAvatar";
import Link from "next/link";

export default function UserCard({profileId, user}) {
    
    return (
        <div className="userInfo">
            <ProfileAvatar user={user} />
            <Link href={`/${user?.id}`}>{user?.user_name}</Link>
        </div>
    )
}
