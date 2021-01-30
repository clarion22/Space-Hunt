import React, {useState} from 'react'
import { useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import * as discussionActions from '../../../store/discussion';

const ReplyField = ({comment}) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const {id} = useParams();
  let parent_id = comment.id;
  const sessionUser = useSelector(state => state.session.user);
  let user_id;
   function onSubmit (e) {
     e.preventDefault();
     if(sessionUser) {
      console.log('XXXXXXXXXXXXXXXXX')
      user_id = sessionUser.id;
      console.log(user_id);
     dispatch(discussionActions.addOneReply({parent_id, user_id, content}))
    }
  }



  return (
    <>
      {sessionUser && <>
        <div className='loggedinreply w-full m-4 pb-6'>
          <form className='flex row' onSubmit={onSubmit}>
            <div className='searchcontainer border w-5/6 mr-2'>
              <input onChange={e => setContent(e.target.value)} type="text" placeholder='Please type in your reply here' className='p-2 w-full' />
            </div>
            <button type='submit' className='bg-red-500 text-white py-2 px-4'>SEND</button>
          </form>
        </div>
      </>}
    </>
  )
  };
export default ReplyField;
