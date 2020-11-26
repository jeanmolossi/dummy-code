import Axios from 'axios';

const api = Axios.create({
  baseURL: `${process.env.REACT_APP_LOCAL_API}`,
});

export default api;
