import axios from 'axios';

const fetchUsers = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=5');
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export default fetchUsers;