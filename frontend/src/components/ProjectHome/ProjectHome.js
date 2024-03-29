import React, { useEffect, useState } from 'react';
import CommentCount from './CommentCount.js';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as projectActions from '../../store/project';
import { useSearchContext } from '../../context/searchcontext';
import * as discussionActions from '../../store/discussion';
const roseImgUrl =
	'https://ph-files.imgix.net/348f3556-5b78-47bb-8097-cc37707a0057.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop';
function ProjectHome() {
	const dispatch = useDispatch();
	const { searchTerm } = useSearchContext();
	const [matchedProjects, setMatchedProjects] = useState([]);
	const projects = useSelector((state) => Object.values(state.project));
	// useEffect(() => {
	//   fetch(`https://pixabay.com/api/?key=20010415-a6682cfb4ce63170711548b9b&q=yellow+flowers&image_type=photo`)
	//   .then(res => res.json())
	//   .then(data => setImages(data.hits))
	//   .catch(e => console.log(e));
	// }, []);

	useEffect(() => {
		dispatch(projectActions.loadAllProjects());
	}, [dispatch]);

	useEffect(() => {
		setMatchedProjects([]);
		let match = projects.filter(
			(project) =>
				project.name.toLowerCase().split(' ').includes(searchTerm) ||
				project.subheading.toLowerCase().split(' ').includes(searchTerm)
		);
		if (match.length > 0) {
			setMatchedProjects(match);
		}
	}, [searchTerm]);

	useEffect(() => {
		dispatch(discussionActions.getDiscussions());
	}, [dispatch]);
	return (
		<>
			<div className='mt-10'>
				{matchedProjects.length
					? matchedProjects.map((project) => {
							return (
								<NavLink
									key={project.id}
									to={`/projects/${project.id}`}
								>
									<div className='projecthome_container'>
										<div className='p-4'>
											<img
												src={roseImgUrl}
												className='inline-block h-24 w-24 mb-8'
											/>
											<ul className='inline-block pl-6'>
												<li className='font-bold'>
													{project.name}
												</li>
												<li className='text-gray-500'>
													{project.subheading}
												</li>
												<li>
													<CommentCount
														projectId={project.id}
													/>
												</li>
											</ul>
										</div>
									</div>
								</NavLink>
							);
					  })
					: projects.map((project) => {
							return (
								<NavLink
									key={project.id}
									to={`/projects/${project.id}`}
								>
									<div className='projecthome_container'>
										<div className='p-4 flex flex-nowrap'>
											<img
												src={roseImgUrl}
												className='inline-block h-24 w-24 mb-8'
											/>
											<ul className='inline-block pl-6'>
												<li className='font-bold'>
													{project.name}
												</li>
												<li className='text-gray-500 flex'>
													{project.subheading}
												</li>
												<li>
													<CommentCount
														projectId={project.id}
													/>
												</li>
											</ul>
										</div>
									</div>
								</NavLink>
							);
					  })}
			</div>
		</>
	);
}

export default ProjectHome;
