const API_KEY = '36TGYH7ATA7kOo7lK7yjppxJOVfscqR1';
const LIMIT = 20;

export const getGifs = async (category = '') => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${LIMIT}`

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(image => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url
  }))

  return(gifs);
};

