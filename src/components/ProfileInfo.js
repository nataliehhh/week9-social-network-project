export default function ProfileInfo({profilePage}) {
    return (
        <div className="profileInfo">
            <p>{`Username: ${profilePage.user_name}`}</p>
            <p>{`Email: ${profilePage.email}`}</p>
            <p>{`Age: ${profilePage.age}`}</p>
            <p>{`Location: ${profilePage.location}`}</p>
            <p>{`Zodiac: ${profilePage.zodiac}`}</p>
            <p>{`Quote: ${profilePage.quote}`}</p>
            <p>{`Mood: ${profilePage.mood}`}</p>
        </div>
    )
}