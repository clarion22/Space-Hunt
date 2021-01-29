import React, {useEffect} from 'react'
import Comment from '../Comment';
import Reply from '../Reply';
import UserDisplay from '../UserDisplay';
import {useSelector, useDispatch} from 'react-redux';
import * as discussionActions from '../../../store/discussion';
import * as userActions from '../../../store/user';
import {useParams} from 'react-router-dom';

const DiscussionMain = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(state => Object.values(state.discussion));
  const users = useSelector(state => Object.values(state.user));


  // useEffect(() => {
  //   dispatch(discussionActions.getDiscussions(id))
  // }, [dispatch])

  useEffect(() => {
    dispatch(userActions.loadAllUsers());
  }, [dispatch])

  function findUser(commentid, array) {
    return array.filter(word => word.id ==  commentid)
  }
  return (
    <>
    {comments && users &&
      <>
        {comments.map(comment => {
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
