import { createContext, useState, useContext, useEffect } from 'react';
export const ImageContext = createContext();
const defaultImage = <img src="https://mycontent-space.s3.amazonaws.com/everything+is+going+to+be+alright.jpg" alt="a" />

export function useImageContext() {
  return useContext(ImageContext);
}

export function ImageProvider(props) {
  const [imageArr, setImageArr] = useState([]);
  const [mainImage, setMainImage] = useState(defaultImage);
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=20010415-a6682cfb4ce63170711548b9b&q=yellow+flowers&image_type=photo`)
    .then(res => res.json())
    .then(data => setImageArr(data.hits))
    .catch(e => console.log(e));
  }, []);
  return (
    <ImageContext.Provider value={{imageArr, setImageArr, mainImage, setMainImage}}>
      {props.children}
    </ImageContext.Provider>
  )
}
