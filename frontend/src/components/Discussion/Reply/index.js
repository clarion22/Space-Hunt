import React from 'react'
import * as discussionActions from '../../../store/discussion';
import {useDispatch} from 'react-redux';

const Reply = ({reply}) => {
  const dispatch = useDispatch();
  const deleteReply = () => {
    dispatch(discussionActions.removeOneReply(reply))
  }
  return (
    <div className='replycontainer pl-24 ml-8 pt-4 border-l-4 flex flex-col'>
      <div className='replywrapper'>
        <div className='replydetails pr-4 pb-2 pt-4'>
          <div>{reply.content}</div>
        </div>
      </div>
      <div className='flex items-center mb-8'>
      <button onClick={deleteReply} className='bg-red-200 rounded-lg ml-1 py-1 px-1.5 border hover:bg-red-300'>Delete</button>
      </div>
    </div>
  )
}

export default Reply;
