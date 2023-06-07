import { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((request) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        request.headers.Authorization = `Bearer ${token}`;
      }
      return request;
    });

    axiosSecure.interceptors.response.use(
      (response) => {
        //data processing if required
        return response;
      },
      async (error) => {
        if ((error.response && error.response.status === 401) || error.response.status === 403) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
