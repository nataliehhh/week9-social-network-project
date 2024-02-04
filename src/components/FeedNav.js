import Link from "next/link";

export default function FeedNav({profileId}) {
    return (
        <div className="feedNav">
            <Link href="/?feed=all">Everyone Feed</Link>
            <Link href="/?feed=followed">Followed Feed</Link>
            <Link href={`/${profileId}`}>My Profile</Link>
        </div>
    )
}