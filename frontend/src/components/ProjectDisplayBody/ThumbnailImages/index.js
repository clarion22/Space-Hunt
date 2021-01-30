import React from 'react'
import {useImageContext} from '../../../context/imagecontext';



const ThumbnailImages = () => {
  const { imageArr, setMainImage } = useImageContext();

  const imageDivCreate = (num, array) => {
    const newArray = [];
    let newThumbnail;
    let url;
    for (let i = 0; i < num; i++) {
      url = array[i].webformatURL;
      newThumbnail = <div key={i} className='bg-green-500 h-16 w-16 m-2 cursor-pointer'>
        <a onClick={e => setMainImage(e.target.src)}><img className='h-full' src={url} alt="" /></a>
      </div>
      newArray.push(newThumbnail);
    }
    return newArray;
  }

 let displayDivs = imageDivCreate(6, imageArr);

  return (
    <div className='flex border-b-2'>
      {displayDivs.map(ele => ele)}
    </div>
  )
}

export default ThumbnailImages;
