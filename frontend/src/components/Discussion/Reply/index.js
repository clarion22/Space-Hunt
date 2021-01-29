import React from 'react'
import UserDisplay from '../UserDisplay';

const Reply = ({reply}) => {
  console.log('reply object', reply)
  return (
    <div className='replycontainer pl-24 ml-8 pt-4 border-l-4'>
      <div className='replywrapper'>
        <div className='replydetails p-10'>
          <div>{reply.content}</div>
        </div>
      </div>
    </div>
  )
}

export default Reply;
