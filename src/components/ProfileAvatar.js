import Image from "next/image";

export default function ProfileAvatar({post, user}) {

    return (
        <div>
        {post &&
            <Image 
            src={post?.image}
            alt={post?.user_name}
            width={100}
            height={100}
            className="profileAvatar"
            />
        }
        {user &&
            <Image 
            src={user?.image}
            alt={user?.user_name}
            width={100}
            height={100}
            className="profileAvatar"
            />
        }
        </div>
    )
}