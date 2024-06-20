import React from 'react';
import "./userInfo.css";
import {useUserStore} from "../../../lib/userStore.js";

const userInfo = () => {
  const {currentUser} = useUserStore();

  return (
    <div className='userInfo'>
      <div className='user'>
        <img src={currentUser.avatar || './avatar.png'} alt='' className='userimage'/>
        <h2>{currentUser.username} </h2>
      </div>
      <div className='icons'>
        <img src='./more.png' alt='' className='iconsimage'/>
        <img src='./video.png' alt='' className='iconsimage'/>
        <img src='./edit.png' alt='' className='iconsimage'/>

      </div>
    </div>
  )
}

export default userInfo