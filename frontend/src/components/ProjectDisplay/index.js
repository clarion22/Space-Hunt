import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import ProjectDisplayHeader from '../ProjectDisplayHeader';
import ProjectDisplayBody from '../ProjectDisplayBody';
import {useSelector} from 'react-redux';
const ProjectDisplay = () => {
  const { id } = useParams();
  const projects = useSelector(state => Object.values(state.project));
  const [mainProject, setMainProject] = useState('');
  useEffect(() => {
    console.log('xxxxxxxxxxx', id)
    projects.map(project => {
      if (project.id == id) {
        console.log(project)
        setMainProject(project)
        console.log('project has been set', mainProject);
      }
    })
  }, [projects, id])
  return (
    <div className='header bg-yellow-50 w-1/2 mx-auto border-2 m-16 rounded-lg'>
      <ProjectDisplayHeader project={mainProject} />
      <ProjectDisplayBody project={mainProject}/>
    </div>
  )
}

export default ProjectDisplay;
