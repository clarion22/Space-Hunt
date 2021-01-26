import React, { useState, useEffect } from 'react'



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
          return <div className='container mx-auto bg-yellow-100 border-solid border border-gray-500 w-3/5 h-32'>
             <div className='p-4'>
            <img src={image.webformatURL} className='inline-block h-24 w-24' />
            <ul className='inline-block pl-6'>
              <li className='font-bold'>{image.pageURL}</li>
              <li>{image.tags}</li>
            </ul>
          </div>
          </div>

        })}
      </div>
    </>
  )
}

export default ProjectHome;
