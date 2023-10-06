/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

export const updateSettings = async (data, type) => {
  // type is either password or data
  const url =
    type === 'password'
      ? 'http://localhost:8000/api/v1/users/updatePassword'
      : 'http://localhost:8000/api/v1/users/updateMe';
  try {
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: data,
    });
    
    if (res.data.status === 'succes' || res.data.status === 'success') {      
      showAlert('success', `${type.toUpperCase()} Updated successfully`);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};
