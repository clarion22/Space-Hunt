import React from 'react';
import rocket from '../../assets/rocket-96.png';
import { useImageContext } from '../../context/imagecontext';
const ProjectDisplayHeader = ({ project }) => {
	const { imageArr } = useImageContext();
	// const mainimg = imageArr[4].webformatURL;
	return (
		<div className='py-10 px-4'>
			<div className='flex flex-nowrap items-center px-4'>
				<div className='bg-blue-500 h-28 w-28'>
					<img
						src={rocket}
						className=' h-28 w-28'
						alt='rocket icon'
					/>
					{/* <img className='h-full' src={mainimg} alt="header" /> */}
				</div>
				<div className='mx-4 h-28'>
					<ul className='ml-2 space-y-2'>
						<li className='font-bold text-2xl'>{project.name}</li>
						<li>{project.subheading}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProjectDisplayHeader;
