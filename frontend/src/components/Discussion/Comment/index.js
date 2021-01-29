import React from 'react'

const Comment = ({comment}) => {
  return (
    <div className='commentcontainer p-6 ml-8 my-2 border-l-4'>
      <div className='commentmain'>
        <div className='comment'>
          {comment.content}
        </div>
      </div>
      <button className='bg-blue-200 rounded-lg p-1'>Reply</button>
      <div>
      </div>
    </div>
  )
}

export default Comment;
