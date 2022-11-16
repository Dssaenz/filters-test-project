import { useState } from 'react';
import { useGetListOfUsers } from '../hooks/useGetListOfUsers';

const FetchFind = () => {
  const [agevalue, setAgeValue] = useState(0);
  const { loading, singleUser, getUserByCurrentAge } = useGetListOfUsers();

  const onInputChange = ({ target }) => setAgeValue(target.value);

  const onSearchUser = () => {
    if (agevalue < 1) return null;
    getUserByCurrentAge(agevalue);
  };

  return (
    <div style={{ width: '50%' }}>
      <h1>Fetch & find</h1>
      <input type='number' name='agevalue' onChange={onInputChange} />
      <button onClick={onSearchUser}>Search User</button>
      {loading ? 'Cargando...' : null}
      {Object.keys(singleUser).length !== 0 && (
        <>
          <p>
            {singleUser.name.title} {singleUser.name.first}{' '}
            {singleUser.name.last}
          </p>
          <p>{singleUser.dob.age}</p>
        </>
      )}
    </div>
  );
};

export default FetchFind;
