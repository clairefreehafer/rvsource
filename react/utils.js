import axios from 'axios';

export const getLinks = (category) => {
  console.log(`api${category}`)
  axios.get(`/api${category}`)
    .then(console.log)
    .catch(console.error);
}

export const getTitle = (pathname) => {
  return pathname.charAt(1).toUpperCase() + pathname.slice(2);
}
