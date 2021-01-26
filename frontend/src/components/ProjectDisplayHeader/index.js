import React from 'react'

const ProjectDisplayHeader = () => {
  return (
    <div className='p-4'>
        <div className='flex flex-nowrap items-center px-4'>
          <div className='bg-blue-500 h-36 w-36'>Image Holder</div>
          <div className='mx-4 h-28'>
            <ul>
              <li>Title Goes Here</li>
              <li>Subheading and description</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default ProjectDisplayHeader;
