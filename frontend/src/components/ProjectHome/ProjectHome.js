import React, { useState, useEffect } from 'react'
import CommentCount from './CommentCount.js';
import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import * as projectActions from '../../store/project';
const roseImgUrl = "https://pixabay.com/get/g37e70982bb21b25805b44be70b23f1005dbe76d182ebd8e94c6f91c7723e2937318454f0737b28c32f795ea3795ea1f26ba771b3fd699b4306e599c797d8dd45_640.jpg";
 function ProjectHome() {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const projects = useSelector(state => Object.values(state.project));

  // useEffect(() => {
  //   fetch(`https://pixabay.com/api/?key=20010415-a6682cfb4ce63170711548b9b&q=yellow+flowers&image_type=photo`)
  //   .then(res => res.json())
  //   .then(data => setImages(data.hits))
  //   .catch(e => console.log(e));
  // }, []);

  useEffect(() => {
    console.log('..................')
    dispatch(projectActions.loadAllProjects())
  }, [dispatch])
  console.log('projects:', projects)
  return (
    <>
      <div className='mt-10' >
        <h1 className='text-left'>Today</h1>
        {projects.map((project, ) => {
          console.log(images);
          return <NavLink to={`/projects/${project.id}`}>
            <div className='projecthome_container'>
             <div className='p-4'>
            <img src={roseImgUrl} className='inline-block h-24 w-24 mb-8' />
            <ul className='inline-block pl-6'>
              <li className='font-bold'>{project.name}</li>
              <li>{project.subheading}</li>
              <li>
                <CommentCount />
              </li>
            </ul>
          </div>
          </div>
          </NavLink>
        })}
      </div>
    </>
  )
}

export default ProjectHome;
