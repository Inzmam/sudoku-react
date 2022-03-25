import axios from 'axios';

const AxiosClient = () => {
  const defaultOptions = {
    baseURL: 'https://sugoku.herokuapp.com/',
  };

  let instance = axios.create(defaultOptions);

  instance.interceptors.request.use(function (config) {
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    return config;
  });

  instance.interceptors.response.use(
    function (successRes) {
      return successRes;
    },
    function (error) {
      return error.response;
    }
  );
  return instance;
};

export default AxiosClient();
