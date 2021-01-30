import React, {useEffect, useState} from 'react'
import Comment from '../Comment';
import UserDisplay from '../UserDisplay';
import {useSelector, useDispatch} from 'react-redux';
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
      if (comment.projectId == id) {
        newComments.push(comment)
      }
    })
    setPostComment(newComments);
  }, [id, comments])

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
