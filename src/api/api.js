import axios from 'axios';

const API_KEY = '20744853-e6e709f705befc52cb2e1c259';

const getImages = (query, perPage) => {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
  );
};

export default getImages;
