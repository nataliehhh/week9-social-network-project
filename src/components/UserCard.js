export default function UserCard({profile}) {
    return (
        <div className="profileCard">
        <h2>{profile?.user_name}</h2>
        </div>   
    )
}

