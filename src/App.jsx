import { useEffect } from 'react';
import { useGetListOfUsers } from './hooks/useGetListOfUsers';

function App() {
  const { users, loading, getListOfUsers } = useGetListOfUsers();

  useEffect(() => {
    getListOfUsers();
  }, []);

  console.log(users);

  return (
    <div>
      <h1>Fetch & order</h1>
      {loading ? 'Cargando' : null}
      {users?.map(user => (
        <div key={user.cell}>
          <p>
            {user.name.title} {user.name.first}
          </p>
          <p>{user.gender}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
