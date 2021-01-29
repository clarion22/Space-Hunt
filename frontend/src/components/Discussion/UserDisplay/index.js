import React, {useEffect} from 'react'

const UserDisplay = ({comment}) => {
  useEffect(() => {
    console.log('')
  }, [comment])
  return (
    <>
      <div className='mainuser flex items-start'>
      <div className='userdetails inline-flex flex-row flex-nowrap'>
        <div className='userimage'>
          <div className='h-8 w-8 rounded-full bg-blue-800 mr-6'>...</div>
        </div>
      <div className='usercontent flex flex-col'>
        <span>First Name Last Name</span>
        <span>@Username</span>
      </div>
      </div>
    </div>
  </>
  )
}

export default UserDisplay;
