import styled from 'styled-components/native';
import { bgColorDarkTheme, bgColorLightTheme } from 'theme/buttonTheme';

import { WrapperProps } from './types';

const Wrapper = styled.ScrollView<WrapperProps>`
  flex: 1;
  background-color: ${({ theme }) => {
    return theme === 'light' ? bgColorLightTheme : bgColorDarkTheme;
  }};
`;

export default Wrapper;
