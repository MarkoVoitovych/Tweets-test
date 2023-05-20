import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_MOCKAPI_BASE_URL,
});

export const getAll = async () => {
  const { data: result } = await instance.get('/');
  return result;
};

export const getByPage = async (page = 1) => {
  const { data: result } = await instance.get('/', {
    params: {
      page,
      limit: 12,
    },
  });
  return result;
};

export const updateById = async data => {
  const { data: result } = await instance.patch(`/${data.id}`, data);
  return result;
};
