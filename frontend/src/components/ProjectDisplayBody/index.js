import React from 'react'
import BigImageProject from './BigImageProject';
import ThumbnailImages from './ThumbnailImages';
import Discussion from '../Discussion';
import summary from './summary';
const ProjectDisplayBody = () => {

  return (
    <div className='mainprojectcontainer'>
      <div className='leftside p-4'>
        <section className='bg-white flex flex-col p-4 rounded-lg'>
          <BigImageProject />
          <ThumbnailImages />
          <div className='descripitiontext p-4'>
            {summary}
          </div>
        </section>
      </div>
      <Discussion />
    </div>
  )
}

export default ProjectDisplayBody;
