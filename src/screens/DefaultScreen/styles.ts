import styled from 'styled-components/native';

interface WrapperProps {
  theme: string;
}

const Wrapper = styled.View<WrapperProps>`
  flex: 1;
  justify-content: flex-start;
  background-color: ${({ theme }) =>
    theme === 'light' ? '#F7F8FB' : '#000000'};
`;

export default Wrapper;
