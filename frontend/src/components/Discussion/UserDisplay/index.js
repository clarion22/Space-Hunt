import React from 'react'

const UserDisplay = () => {
  return (
    <div className='mainuser flex items-start'>
      <div className='userdetails inline-flex flex-row flex-nowrap'>
        <div className='userimage'>
          <div className='h-8 w-8 rounded-full bg-blue-800 mr-6'>...</div>
        </div>
      <div className='usercontent flex flex-col'>
        <span>Name</span>
        <span>@username</span>
      </div>
      </div>
    </div>
  )
}

export default UserDisplay;
