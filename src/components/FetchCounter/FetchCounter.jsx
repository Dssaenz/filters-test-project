import { useEffect } from 'react';
import { Wrapper, ListUser, Container, Text } from './styles';

import Spinner from '../Spinner/Spinner';
import MainContainer from '../MainContainer/MainContainer';

import { useGetListOfUsers } from '../../hooks/useGetListOfUsers';

const FetchCounter = () => {
  const { users, loading, letterResult, getRepeatedLetterByName } =
    useGetListOfUsers();

  useEffect(() => {
    getRepeatedLetterByName();
  }, []);

  return (
    <MainContainer title='Fetch & count'>
      {loading ? <Spinner /> : null}
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
      <Text>{letterResult}</Text>
    </MainContainer>
  );
};

export default FetchCounter;
