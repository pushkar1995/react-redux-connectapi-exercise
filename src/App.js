import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchUsers from './components/api';
import usersSliceReducer from './store/users/userSlice'

function App() {
  const dispatch = useDispatch(); 

  const { users, isLoading, error } = useSelector(state => state.usersSlice);

  useEffect(() => {
    async function getUsers() {
      try {
        dispatch(usersSliceReducer.actions.setIsLoading(true)); // Issue here
        const fetchedUsers = await fetchUsers();
        dispatch(usersSliceReducer.actions.setUsers(fetchedUsers));
      } catch (error) {
        dispatch(usersSliceReducer.actions.setError(error.message)); 
      } finally {
        dispatch(usersSliceReducer.actions.setIsLoading(false)); // Issue here
      }
    }
    getUsers();
  }, [dispatch]);

  return (
    <div className="App">
      {isLoading && <p>Loading...</p>} 
      {error && <p>Error: {error}</p>}
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;