import UserCard from "@/components/UserCard";

export default function FollowedPosts({allProfiles, follows, profileId}) {
    const followees = follows.length === 0 ? false : true;

    const followeeProfiles = allProfiles.filter(item =>
      follows.some(filterItem => item.id === filterItem.followee_id));
  
    console.log("followeeProfiles", followeeProfiles)

    return (
        <div className="userFeed">
        {followees && <div>
            {followeeProfiles.map((user) => <UserCard key={user.id} user={user} profileId={profileId}  />
            )}
        </div>}
        {!followees && <p>No followed profiles</p>}
        </div>
    )
}