import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux';

function CommentCount({projectId}) {
  const discussions = useSelector(state => Object.values(state.discussion));

  const [commentCount, setCommentCount] = useState(0);

  const count = () => {
    let nums = 0;
    discussions.map(discussion => {
      if (discussion.projectId == projectId) {
        nums++;
      }
    })
    return nums;
  }
  useEffect(() => {
    setCommentCount(count());
  },[commentCount])
  return (
    <div className='w-12 bg-gray-100 rounded-lg text-center mt-2 border'>
      <i className='fas fa-comment pr-1' />
      {commentCount}
    </div>
  )
}

export default CommentCount;
