import Image from "next/image";
import placeholder from "@/../public/placeholder-avatar.jpg"

export default function UserAvatar({user}) {

    return (
        <div>
        {user?.image === null ? (
             <Image 
             src={placeholder}
             alt="placeholder"
             width={100}
             height={100}
             className="profileAvatar"
             />
        ) : (  
            <Image 
             src={user?.image}
             alt={user?.user_name}
             width={100}
             height={100}
             className="profileAvatar"
             />           
        )}
        </div>
    )
}