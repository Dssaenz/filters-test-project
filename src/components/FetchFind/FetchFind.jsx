import { useState } from 'react';
import { Input, Button, UserCard } from './styles';

import { useGetListOfUsers } from '../../hooks/useGetListOfUsers';

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
      <Input type='number' name='agevalue' onChange={onInputChange} />
      <Button onClick={onSearchUser}>Search User</Button>
      {loading ? <p>Loading...</p> : null}
      {Object.keys(singleUser).length !== 0 && !loading && (
        <UserCard>
          <div>
            <img
              src={singleUser.picture.medium}
              alt={name.first}
              className='avatar'
            />
          </div>
          <div>
            <h4>
              {singleUser.name.title} {singleUser.name.first}{' '}
              {singleUser.name.last}
            </h4>
            <p>Age: {singleUser.dob.age}</p>
          </div>
        </UserCard>
      )}
    </div>
  );
};

export default FetchFind;
