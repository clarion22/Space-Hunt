import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux';

const UserDisplayReply = ({reply}) => {
  const [myUser, setMyUser] = useState('');
  let foundUser;
  const users = useSelector(state => Object.values(state.user));
  useEffect(() => {
    foundUser = users.filter(user => user.id === reply.user_id)
    setMyUser(foundUser[0])
  },[reply, myUser]);

  return (
    <>
      <div className='mainuser flex items-start '>
      <div className='userdetails inline-flex flex-row flex-nowrap pl-24 ml-8 pt-4 border-l-4'>
        <div className='userimage flex items-center'>
          <div className='h-8 w-8 rounded-full bg-green-400 mr-6'></div>
        </div>
      <div className='usercontent flex flex-col'>
        <span className='font-bold'>{myUser.name}</span>
        <span>{'@' + myUser.username}</span>
      </div>
      </div>
    </div>
  </>
  )
}

export default UserDisplayReply;
