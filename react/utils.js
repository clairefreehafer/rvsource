import axios from 'axios';

export const getLinks = (category) => {
  console.log('axios', `/api${category}`);
  return axios.get(`/api${category}`)
    .catch(console.error);
}

export const getTitle = (pathname) => {
  return pathname.charAt(1).toUpperCase() + pathname.slice(2);
}

export const getAllLinks = () => {
  return axios.get('/api/admin')
    .catch(console.error);
}
