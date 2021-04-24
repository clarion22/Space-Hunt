import React, { useEffect } from 'react';
import BigImageProject from './BigImageProject';
import ThumbnailImages from './ThumbnailImages';
import Discussion from '../Discussion';
import summary from './summary';
import { useImageContext, useimageContext } from '../../context/imagecontext';
import { getImages } from '../../store/image';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const ProjectDisplayBody = ({ project }) => {
	const { imageArr, mainImage, setMainImage } = useImageContext();
	const { id } = useParams();
	// let firstImage = imageArr[0].webformatURL;
	const dispatch = useDispatch();
	useEffect(() => {
		// setMainImage(firstImage);
		dispatch(getImages(`Project${id}`));
	}, [dispatch]);

	return (
		<div className='mainprojectcontainer'>
			<div className='leftside p-4'>
				<section className='bg-white flex flex-col p-4 rounded-lg'>
					<BigImageProject />
					<ThumbnailImages />
					<div className='descripitiontext p-4'>
						{project.description}
					</div>
				</section>
			</div>
			<Discussion />
			<a target='_blank' href='undefined/icons/set/rocket-emji'>
				Rocket icon
			</a>{' '}
			icon by{' '}
			<a target='_blank' href=''>
				Icons8
			</a>
		</div>
	);
};

export default ProjectDisplayBody;
