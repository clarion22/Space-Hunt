import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

function CommentCount({projectId}) {
const discussions = useSelector(state => Object.values(state.discussion));
useEffect(() => {}, [discussions.length])
const discussionNum = discussions.filter(discussion => discussion.projectId == projectId)
  return (
    <div className='w-12 bg-gray-100 rounded-lg text-center mt-2 border'>
      <i className='fas fa-comment pr-1' />
      {discussionNum.length}
    </div>
  )
}

export default CommentCount;
