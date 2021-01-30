import React, {useEffect, useState} from 'react'
import Comment from '../Comment';
import Reply from '../Reply';
import UserDisplay from '../UserDisplay';
import {useSelector, useDispatch} from 'react-redux';
import * as discussionActions from '../../../store/discussion';
import * as userActions from '../../../store/user';
import {useParams} from 'react-router-dom';

const DiscussionMain = () => {
  const [postComment, setPostComment] = useState([])
  const {id} = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(state => Object.values(state.discussion));
  const users = useSelector(state => Object.values(state.user));
  let newComments = [];
  useEffect(() => {
    comments.map(comment => {
      console.log('this is what a comment looks like', comment)
      if (comment.projectId == id) {
        newComments.push(comment)
      }
    })
    setPostComment(newComments);
    console.log('i give up on this', postComment)
    console.log('newcomments', newComments);
  }, [id, newComments])

  useEffect(() => {
    dispatch(userActions.loadAllUsers());
  }, [dispatch, id])

  function findUser(commentid, array) {
    return array.filter(word => word.id ==  commentid)
  }
  return (
    <>
    {comments && users &&
      <>
        {postComment.map(comment => {
          let mainUser = findUser(comment.userId, users)
          console.log(comment.userId, 'this is comment')
          return <>
            <UserDisplay comment={comment}/>
            <Comment comment={comment}/>
          </>
        })}
      </>
      }
  </>
  )
}

export default DiscussionMain;
