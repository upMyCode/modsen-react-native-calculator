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

const KeyCupListItem = styled.View`
  margin-left: 20px;
`;

const KeyCupListItemNumbers = styled.View`
  margin-left: 20px;
  margin-bottom: 22px;
`;

const KeyCupListItemRightSideFirstGroup = styled.View`
  margin-bottom: 22px;
  margin-left: 20px;
`;

const KeyCupListItemRightSideSecondGroup = styled.View`
  margin-bottom: 26px;
  margin-left: 22px;
`;

export {
  KeyCupContainer,
  KeyCupContainerBottom,
  KeyCupContainerNumbers,
  KeyCupContainerTop,
  KeyCupListItem,
  KeyCupListItemNumbers,
  KeyCupListItemRightSideFirstGroup,
  KeyCupListItemRightSideSecondGroup,
  Wrapper,
};
