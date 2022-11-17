import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 400px;
`;

export const ListUser = styled.ul`
  background: ${props => props.theme.colors.white};
  border-radius: 2px;
  list-style: none;
  padding: 4px 15px;
`;

export const Container = styled.li`
  display: flex;
  padding-bottom: 10px;
  padding-top: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .avatar {
    border-radius: 50%;
    width: 64px;
    margin-right: 1rem;
  }
  h4,
  p {
    margin: 0;
  }
  h4 {
    margin-top: 10px;
    font-size: 18px;
    display: inline-block;
    position: relative;
    color: ${props => props.theme.colors.dark};
  }
  h4::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.colors.dark};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  h4:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  p {
    color: ${props => props.theme.colors.gray};
    font-size: 15px;
    margin-top: 5px;
  }
`;
