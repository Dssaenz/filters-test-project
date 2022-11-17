import { useEffect } from 'react';
import { Wrapper, ListUser, Container } from './styles';

import { useGetListOfUsers } from '../../hooks/useGetListOfUsers';

const FetchCounter = () => {
  const { users, loading, letterResult, getRepeatedLetterByName } =
    useGetListOfUsers();

  useEffect(() => {
    getRepeatedLetterByName();
  }, []);

  return (
    <div style={{ width: '50%' }}>
      <h1>Fetch & count</h1>
      {loading ? 'Loading...' : null}
      <Wrapper>
        {users?.map(({ cell, name, picture, login }) => (
          <ListUser key={cell}>
            <Container>
              <div>
                <img src={picture.medium} alt={name.first} className='avatar' />
              </div>
              <div>
                <h4>
                  {name.first} {name.last}
                </h4>
                <p>{login.username}</p>
              </div>
            </Container>
          </ListUser>
        ))}
      </Wrapper>
      <p style={{ fontSize: 16 }}>{letterResult}</p>
    </div>
  );
};

export default FetchCounter;
