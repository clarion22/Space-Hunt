import React, { useState, useEffect } from 'react'
import CommentCount from './CommentCount.js';
import { NavLink } from 'react-router-dom';

 function ProjectHome() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=20010415-a6682cfb4ce63170711548b9b&q=yellow+flowers&image_type=photo`)
    .then(res => res.json())
    .then(data => setImages(data.hits))
    .catch(e => console.log(e));
  }, []);

  return (
    <>
      <div className='mt-10' >
        <h1 className='text-left'>Today</h1>
        {images.map((image) => {
          return <div className='container mx-auto bg-yellow-100 border-solid border border-gray-500 w-3/5 h-32 hover:bg-yellow-200 transition delay-15'>
             <div className='p-4'>
            <img src={image.webformatURL} className='inline-block h-24 w-24 mb-8' />
            <ul className='inline-block pl-6'>
              <li className='font-bold'>{image.pageURL}</li>
              <li>{image.tags}</li>
              <li>
                <CommentCount />
              </li>
            </ul>
          </div>
          </div>

        })}
      </div>
    </>
  )
}

export default ProjectHome;
