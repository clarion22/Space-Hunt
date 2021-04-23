import React from 'react';
import {useImageContext} from '../../../context/imagecontext';
let defaultImage = "https://mycontent-space.s3.amazonaws.com/everything+is+going+to+be+alright.jpg";
const BigImageProject = () => {
  const { mainImage } = useImageContext();
  return (
    <div>
      <div className=''>
         <img className='mx-auto w-auto lg:max-h-100 rounded-lg'src={mainImage} alt="flower" />
      </div>
    </div>
  )
}

export default BigImageProject;
