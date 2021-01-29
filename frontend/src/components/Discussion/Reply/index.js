import React from 'react'
import UserDisplay from '../UserDisplay';
import * as discussionActions from '../../../store/discussion';
import {useDispatch} from 'react-redux';

const Reply = ({reply}) => {
  const dispatch = useDispatch();
  console.log('reply object', reply)
  const deleteReply = () => {
    console.log('delete reply function triggered')
    dispatch(discussionActions.removeOneReply(reply))
  }
  return (
    <div className='replycontainer pl-24 ml-8 pt-4 border-l-4'>
      <div className='replywrapper'>
        <div className='replydetails p-10'>
          <div>{reply.content}</div>
        </div>
      </div>
      <button onClick={deleteReply} className='bg-red-200 rounded-lg ml-1 p-1'>Delete</button>
    </div>
  )
}

export default Reply;
