import React from 'react'

const DiscussionInput = () => {
  return (
    <div className='loggedinreply w-full m-4 pb-6'>
      <form className='flex row'>
        <div className='searchcontainer border w-5/6 mr-2'>
          <input type="text" placeholder='What do you think of this product?' className='p-2 w-full' />
        </div>
        <button type='submit' className='bg-red-500 text-white py-2 px-4'>SEND</button>
      </form>
    </div>
  )
}

export default DiscussionInput;
