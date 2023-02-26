import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {

// useSelector is used to get the value of states from our store, in this case we are storing the value of user state inside our variable called user.
const user = useSelector((state)=>state.user.value);


// useSelector is used to get the value of states from our store, in this case we are storing the value of theme state inside our variable called themeColor.(then use it whereever you want)
const themeColor = useSelector((state)=>state.theme.value)

  return (
    <>
    <div style={{color : themeColor}}>
        <h1>Profile Page :</h1>
        <h4> Name : {user.name}</h4>
        <h4> Age : {user.age}</h4>
        <h4> Email : {user.email}</h4>
    </div>
    </>
  )
}

export default Profile;