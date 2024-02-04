import PostCard from "@/components/PostCard";

export default function AllPosts({allPosts, profileId }) {
    return (
        <div className="postFeed"> 
        {allPosts.map((post) => <PostCard key={post.id} post={post} profileId={profileId} />
        )}
    </div>
    )
}