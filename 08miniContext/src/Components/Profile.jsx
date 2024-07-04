// to take data

import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
     // jo data lena hai
const {user}=useContext(UserContext)

if (!user) return <div>please Login</div>
return <div>Welcome: {user.username} ,{user.password}</div>



}


export default Profile
