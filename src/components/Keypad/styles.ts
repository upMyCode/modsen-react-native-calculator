import styled from 'styled-components/native';

const Wrapper = styled.View`
  width: 350px;
  height: 442px;
`;

const KeyCupContainer = styled.View`
  flex-direction: row;
  margin-bottom: 22px;
`;

const KeyCupContainerNumbers = styled.View`
  flex-direction: row;
`;

const KeyCupContainerTop = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

const KeyCupContainerBottom = styled.View`
  flex-direction: row;
  margin-top: -8px;
`;
export {
  KeyCupContainer,
  KeyCupContainerBottom,
  KeyCupContainerNumbers,
  KeyCupContainerTop,
  Wrapper,
};
