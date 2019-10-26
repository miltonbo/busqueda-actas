import axios from 'axios';

//export const baseUrl = 'https://par.com/actas/api/';
export const baseUrl = 'https://quarzo.io/actas/api/';

export default
   axios.create({
      baseURL: baseUrl,
      timeout: 30000
   });

