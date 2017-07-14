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
 * get the page title. not currently in use
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


export const months = ['', 'January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * potential category descriptions... need revising
 */
export const categoryDescriptions = {
  apps: 'Phone applications for various tasks.',
  'av-systems': 'Electronics for TV and stereo systems.',
  boondocking: 'Tips for living off the grid.',
  'cold-weather': 'How to deal with the worst season',
  internet: 'Getting internet wherever you go.',
  maintenance: 'Tips for when things go wrong.',
  'miscellaneous-gear': 'Any other sorts of products.',
  organization: 'How to make use of every inch of space.',
  outdoors: 'Actual camping gear.',
  'reno-deco': 'Ideas for renovating and decorating.',
  solar: 'How to manage solar systems.',
  towing: 'Tow vehicles and hitches.',
  water: 'How to conserve.',

}
