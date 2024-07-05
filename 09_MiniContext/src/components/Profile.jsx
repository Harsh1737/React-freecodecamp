import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)

    //Conditional rendering / return

    if (!user) return <div>Not Logged In</div>

    return <div>Welcome {user.username}</div>
}

export default Profile