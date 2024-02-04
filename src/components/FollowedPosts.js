import PostCard from "@/components/PostCard";

export default function FollowedPosts({allPosts, follows, profileId}) {
    const followees = follows.length === 0 ? false : true;

    const followeePosts = allPosts.filter(item =>
      follows.some(filterItem => item.profile_id === filterItem.followee_id));
  
    console.log("followeePosts", followeePosts)
    return (
        <div className="postFeed">
        {followees && <div>
            {followeePosts.map((post) => <PostCard key={post.id} post={post} profileId={profileId}  />
            )}
        </div>}
        {!followees && <p>No followed posts</p>}
        </div>
    )
}