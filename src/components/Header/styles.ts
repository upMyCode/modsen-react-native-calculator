import styled from 'styled-components/native';

const Wrapper = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Info = styled.Text`
  color: #000000;
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

export { Info, ManageSettingsContainer, Wrapper };
