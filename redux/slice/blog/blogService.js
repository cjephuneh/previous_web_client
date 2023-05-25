
import axios from 'axios';
import { BASE_URI } from '../../../components/utils/ApiUrls';

const getAllblogPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URI}/blogs/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getAllblogPosts;