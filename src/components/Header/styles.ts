import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

const Info = styled.Text`
  color: #000000;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin-left: 34px;
  margin-top: 33px;
`;

const ManageSettingsImg = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 13px;
`;

const ManageSettingsButton = styled.Pressable`
  margin-top: 36px;
  margin-left: 59px;
`;
export { Info, Wrapper, ManageSettingsImg, ManageSettingsButton };
