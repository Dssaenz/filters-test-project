import { useEffect } from 'react';
import { Wrapper, ListUser, Container } from './styles';

import Spinner from '../Spinner/Spinner';
import MainContainer from '../MainContainer/MainContainer';

import { useGetListOfUsers } from '../../hooks/useGetListOfUsers';

const FetchOrder = () => {
  const { users, loading, getListOfUsers } = useGetListOfUsers();

  useEffect(() => {
    getListOfUsers();
  }, []);

  return (
    <MainContainer title='Fetch & order'>
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
    </MainContainer>
  );
};

export default FetchOrder;
