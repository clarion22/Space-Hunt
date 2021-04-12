import React, {useEffect} from 'react'
import BigImageProject from './BigImageProject';
import ThumbnailImages from './ThumbnailImages';
import Discussion from '../Discussion';
import summary from './summary';
import {useImageContext, useimageContext} from '../../context/imagecontext';
import {getImages} from '../../store/image';
import {useDispatch} from 'react-redux';

const ProjectDisplayBody = ({project}) => {
  const {imageArr, mainImage, setMainImage} = useImageContext();
  // let firstImage = imageArr[0].webformatURL;
  const dispatch = useDispatch();
  useEffect(() => {
    // setMainImage(firstImage);
    dispatch(getImages())
  },[dispatch])

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
    </div>
  )
}

export default ProjectDisplayBody;
