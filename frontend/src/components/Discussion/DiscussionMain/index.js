import React from 'react'
import Comment from '../Comment';
import Reply from '../Reply';
import UserDisplay from '../UserDisplay';

const DiscussionMain = () => {
  return (
    <>
      <UserDisplay />
          <Comment />
            <Reply />
            <Reply />
    </>
  )
}

export default DiscussionMain;
