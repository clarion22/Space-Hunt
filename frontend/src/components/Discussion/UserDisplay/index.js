import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux';

const UserDisplay = ({comment}) => {
  const [myUser, setMyUser] = useState('');
  let foundUser;
  const users = useSelector(state => Object.values(state.user));
  useEffect(() => {
    foundUser = users.filter(user => user.id === comment.userId)
    setMyUser(foundUser[0])
    console.log(myUser)
  },[comment, myUser]);

  return (
    <>
    {myUser && <>
      <div className='mainuser flex items-start'>
      <div className='userdetails inline-flex flex-row flex-nowrap'>
        <div className='userimage'>
          <div className='h-8 w-8 rounded-full bg-blue-800 mr-6'></div>
        </div>
      <div className='usercontent flex flex-col'>
        <span>{myUser.name}</span>
        <span>{myUser.username}</span>
      </div>
      </div>
    </div>
    </>}
  </>
  )
}

export default UserDisplay;
