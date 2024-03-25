import { useEffect, useState } from 'react';
import { getGifs } from '../api/getGifs';

const useFetchGif = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getImages = async () => {
    setIsLoading(true);
    const gifs = await getGifs(category);
    setImages(gifs)
    setIsLoading(false);

  };

  useEffect(() => {
    getImages();
  }, []); 

  return ({
    images,
    isLoading
  })
}

export default useFetchGif;