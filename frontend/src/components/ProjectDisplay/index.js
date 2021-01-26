import React from 'react'
import {useParams} from 'react-router-dom';
import ProjectDisplayHeader from '../ProjectDisplayHeader';
import ProjectDisplayBody from '../ProjectDisplayBody';

const ProjectDisplay = () => {
  const { id } = useParams();
  return (
    <div className='header bg-gray-500 w-1/2 mx-auto h-screen'>
      <ProjectDisplayHeader />
      <ProjectDisplayBody />
    </div>
  )
}

export default ProjectDisplay;
