import React from 'react'
import UserDisplay from '../UserDisplay';

const Reply = () => {
  return (
    <div className='replycontainer pl-24 ml-8 pt-4 border-l-4'>
      <div className='replywrapper'>
        <UserDisplay />
        <div className='replydetails p-10'>
          <div>Love that the first $500 is free. Thinking of signing up. Is there a way to embed this into a website or is it through mona only. I like simplicity and still being able to customize</div>
        </div>
        <button className='bg-blue-200 rounded-lg p-1'>Reply</button>
      </div>
    </div>
  )
}

export default Reply;
