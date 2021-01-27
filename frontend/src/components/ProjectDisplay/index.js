import React from 'react'
import {useParams} from 'react-router-dom';
import ProjectDisplayHeader from '../ProjectDisplayHeader';
import ProjectDisplayBody from '../ProjectDisplayBody';

const ProjectDisplay = () => {
  const { id } = useParams();
  return (
    <div className='header bg-yellow-100 w-1/2 mx-auto border-2 m-16 rounded-lg'>
      <ProjectDisplayHeader />
      <ProjectDisplayBody />
    </div>
  )
}

export default ProjectDisplay;
