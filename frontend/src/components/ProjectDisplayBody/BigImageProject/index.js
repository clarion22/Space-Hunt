import React from 'react';
import {useImageContext} from '../../../context/imagecontext';

const BigImageProject = () => {
  const { mainImage } = useImageContext();
  return (
    <div>
      <div className=''>
        <img className='mx-auto w-auto h-auto rounded-lg'src={mainImage} alt="flower" />
      </div>
    </div>
  )
}

export default BigImageProject;
