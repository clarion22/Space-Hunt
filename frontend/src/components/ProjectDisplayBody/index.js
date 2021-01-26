import React from 'react'
import BigImageProject from './BigImageProject';
import ThumbnailImages from './ThumbnailImages';
import Discussion from '../Discussion';

const ProjectDisplayBody = () => {
  return (
    <div className='mainprojectcontainer'>
      <div className='leftside'>
        <section>
          <BigImageProject />
          <ThumbnailImages />
          <div className='descripitiontext'>
          Create tailored B2B sales emails with a click. Magic Sales Bot uses GPT-3 to create high-converting emails to send to your prospects, allowing you to prospect 10x faster.
          </div>
        </section>
      </div>
      <Discussion />
    </div>
  )
}

export default ProjectDisplayBody;
