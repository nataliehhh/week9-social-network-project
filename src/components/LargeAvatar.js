import Image from "next/image";

export default function LargeAvatar({profilePage}) {
// console.log(profilePage.image)
    return (
        <Image 
        src={profilePage.image}
        alt={profilePage.user_name}
        width={200}
        height={200}
        className="largeAvatar"
        />
    )
}