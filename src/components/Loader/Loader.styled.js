import styled from 'styled-components';

export const LoaderStyled = styled.span`
  width: 100px;
  height: 100px;
  border: 5px dotted #fff;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
