import React from 'react'

const Comment = () => {
  return (
    <div className='commentcontainer p-6 ml-8 my-2 border-l-4'>
      <div className='commentmain'>
        <div className='comment'>
        Been using Mona for a while for my private tutoring business - such an easy experience and a beautiful page generated! Has really helped organise my time and grow my side hustle during this third wave of Covid!
        </div>
      </div>
      <button className='bg-blue-200 rounded-lg p-1'>Reply</button>
    </div>
  )
}

export default Comment;
