import React from 'react'
import {useDispatch} from 'react-redux';
import * as discussionActions from '../../../store/discussion';
import {useParams} from 'react-router-dom';

const Comment = ({comment}) => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const deleteButton = () => {
    dispatch(discussionActions.deleteOneDiscussion(id, comment.id))
  }
  return (
    <div className='commentcontainer p-6 ml-8 my-2 border-l-4'>
      <div className='commentmain'>
        <div className='comment'>
          {comment.content}
        </div>
      </div>
      <button className='bg-blue-200 rounded-lg p-1'>Reply</button>
      <button onClick={deleteButton} className='bg-red-200 rounded-lg ml-1 p-1'>Delete</button>
      <div>
      </div>
    </div>
  )
}

export default Comment;
