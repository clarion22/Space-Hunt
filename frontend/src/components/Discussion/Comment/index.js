import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux';
import * as discussionActions from '../../../store/discussion';
import {useParams} from 'react-router-dom';
import Reply from '../Reply';
import UserDisplayReply from '../UserDisplayReply';
import ReplyField from '../ReplyField';

const Comment = ({comment}) => {
  const [replyToggle, setReplyToggle] = useState(false);
  const {id} = useParams();
  const dispatch = useDispatch();
  const deleteButton = () => {
    dispatch(discussionActions.deleteOneDiscussion(id, comment.id))
  }
  console.log('comments are here:', comment, comment.Reviews)
  let reviews;
  const toggleChange = () => setReplyToggle(value => !value);
  if (comment) {
    console.log('line 20: ', comment)
     reviews = Object.values(comment.Reviews)
  }

  useEffect(() => {

  }, [id])
  return (
    <>
      <div className='commentcontainer p-6 ml-8 my-2 border-l-4'>
        <div className='commentmain'>
          <div className='comment'>
            {comment.content}
          </div>
        </div>
        <button onClick={toggleChange}className='bg-blue-200 rounded-lg p-1'>Reply</button>
        <button onClick={deleteButton} className='bg-red-200 rounded-lg ml-1 p-1'>Delete</button>
        <div>
        </div>
        {replyToggle && <ReplyField comment={comment} />}
      </div>
      {reviews.length && reviews.map(reply => {
        return <>
        <UserDisplayReply reply={reply} />
        <Reply reply={reply}/>
        </>
      })}
    </>
  )
}

export default Comment;
