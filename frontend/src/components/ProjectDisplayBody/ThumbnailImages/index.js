import React, {useEffect, useState} from 'react'
import {useImageContext} from '../../../context/imagecontext';
import {getImages} from '../../../store/image';
import {useDispatch, useSelector} from 'react-redux';



const ThumbnailImages = () => {
  const { imageArr, setMainImage } = useImageContext();
  const [imageArray, setImageArray] = useState([])
  const projectImgs = useSelector(state => Object.values(state.image.images))
  useEffect(() => {
     setImageArray(projectImgs)
  }, [])


  const imageDivCreate = (num, array) => {
    const newArray = [];
    let newThumbnail;
    let url;
    console.log(array[0], 'aaaaaaaaa aaaaaa')
    if (array[0] !== undefined) {
        for (let i = 0; i < num; i++) {
          url = array[i].webformatURL;
          newThumbnail = <div key={i} className='bg-green-500 h-16 w-16 m-2 cursor-pointer'>
            <a onClick={e => setMainImage(e.target.src)}><img className='h-full' src={url} alt="" /></a>
          </div>
          newArray.push(newThumbnail);
        }
    }
    return newArray;
  }

 let displayDivs = imageDivCreate(6, imageArray);

 if (!projectImgs.length || !imageArray.length) return <div>Loading...</div>

  return (
    <div className='flex border-b-2'>
      {displayDivs.map(ele => ele)}
    </div>
  )
}

export default ThumbnailImages;
