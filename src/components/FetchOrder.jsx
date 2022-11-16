import { useEffect } from 'react';
import { useGetListOfUsers } from '../hooks/useGetListOfUsers';

const FetchOrder = () => {
  const { users, loading, getListOfUsers } = useGetListOfUsers();

  useEffect(() => {
    getListOfUsers();
  }, []);

  return (
    <div style={{ width: '50%' }}>
      <h1>Fetch & order</h1>
      {loading ? 'Cargando' : null}
      {users?.map(({ cell, name }) => (
        <div key={cell}>
          <p>
            {name.first} {name.last}
          </p>
          <p>{name.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchOrder;
