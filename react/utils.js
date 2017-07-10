import axios from 'axios';

/**
 * get all links for each page
 * @param {string} category - current page category
 * @return {Promise} all links for that category
 */
export const getLinks = (category) => {
  return axios.get(`/api${category}`)
    .catch(console.error);
}

/**
 * get the page title
 * @param {string} pathname
 * @return {string} with proper capitalization
 */
export const getTitle = (pathname) => {
  return pathname.charAt(1).toUpperCase() + pathname.slice(2);
}

/**
 * get all of the links to list on the admin page
 */
export const getAllLinks = () => {
  return axios.get('/api/admin')
    .catch(console.error);
}
