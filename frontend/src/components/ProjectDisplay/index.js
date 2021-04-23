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
    projects.map(project => {
      if (project.id == id) {
        setMainProject(project)
      }
    })
  }, [projects, id])

  useEffect(() => {}, [mainProject])
  return (
    <div className="project_wrapper">
        <div className='header bg-yellow-50 w-auto mx-auto border-2 m-16 rounded-lg'>
          <ProjectDisplayHeader project={mainProject} />
          <ProjectDisplayBody project={mainProject}/>
        </div>
    </div>
  )
}

export default ProjectDisplay;
