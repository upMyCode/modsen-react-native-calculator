import styled from 'styled-components/native';

import type { Props } from './types';

const Wrapper = styled.SafeAreaView<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Info = styled.Text<Props>`
  color: ${({ theme }) => {
    return theme === 'light' ? '#000000' : '#FFFFFF';
  }};
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin-left: 34px;
  margin-top: 33px;
  font-family: Poppins-Regular;
`;

const ManageSettingsContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 36px;
  margin-right: 13px;
`;

const ManageIcon = styled.Image`
  width: 32px;
  height: 32px;
`;

export { Info, ManageIcon, ManageSettingsContainer, Wrapper };
