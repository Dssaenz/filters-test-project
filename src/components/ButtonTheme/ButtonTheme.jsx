import React from 'react';
import { ButtonContainer } from './styles';

import darkImage from '../../assets/dark.png';
import lightImage from '../../assets/light.png';

const ButtonTheme = ({ theme, toggleTheme }) => (
  <ButtonContainer onClick={() => toggleTheme()}>
    <img src={theme === 'dark' ? darkImage : lightImage} />
  </ButtonContainer>
);

export default ButtonTheme;
