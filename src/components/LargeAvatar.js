import Image from "next/image";
import placeholder from "@/../public/placeholder-avatar.jpg"


export default function LargeAvatar({profilePage}) {
// console.log(profilePage.image)
    return (
        <>
        {profilePage.image ? (
        <Image 
        src={profilePage.image}
        alt={profilePage.user_name}
        width={200}
        height={200}
        className="largeAvatar"
        />
        ) : (
        <Image 
        src={placeholder}
        alt="placeholder"
        width={200}
        height={200}
        className="largeAvatar"
        />    
        )}
        </>
    )
}