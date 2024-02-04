import UserCard from "@/components/UserCard";

export default function AllUsers({allProfiles, profileId }) {
    return (
        <div className="userFeed">
        {allProfiles.map((user) => <UserCard key={user.id} user={user} profileId={profileId} />
        )}
    </div>
    )
}