import React, {useEffect} from 'react'
import DiscussionMain from './DiscussionMain';
import DiscussionInput from './DiscussionInput';
import {useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import * as discussionActions from '../../store/discussion';

const Discussion = () => {
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(discussionActions.getDiscussions(id));
  }, [dispatch, id])

  return (
    <div>
      <h2 className='font-bold'>Discussion</h2>
      <div className='discussions bg-white p-6 m-4 rounded-lg'>
        <DiscussionInput />
        <DiscussionMain />
      </div>
    </div>
  )
}

export default Discussion;
