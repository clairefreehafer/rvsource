import axios from 'axios';

export const getLinks = (category) => {
  return axios.get(`/api${category}`)
    .catch(console.error);
}

export const getTitle = (pathname) => {
  return pathname.charAt(1).toUpperCase() + pathname.slice(2);
}
