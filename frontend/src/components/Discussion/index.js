import React from 'react'
import DiscussionMain from './DiscussionMain';
import DiscussionInput from './DiscussionInput';

const Discussion = () => {
  return (
    <div>
      <h2 className='font-bold'>Discussion</h2>
      <div className='discussions bg-white p-6 m-4 rounded-lg'>
        <DiscussionInput />
        <DiscussionMain />
        <DiscussionMain />
      </div>
    </div>
  )
}

export default Discussion;
