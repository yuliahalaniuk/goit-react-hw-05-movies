import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  width: 90%;
  padding: 40px 20px;
  margin: 0 auto;
`;
export const Title = styled.h1`
  color: #fefefe;
  font-family: Poppins;
  font-size: 48px;
  text-align: center;
  font-weight: 500;

  margin-bottom: 60px;
`;

export const AdditionalList = styled.ul`
  width: 100%;

  border-top: 1px solid rgba(61, 210, 204, 0.4);

  margin-bottom: 40px;

  display: grid;
  align-items: center;
  grid-template-rows: 50px 50px;

  > li {
    border-bottom: 1px solid rgba(61, 210, 204, 0.4);
    height: 100%;

    display: flex;
    align-items: center;
  }
`;

export const BackButton = styled(Link)`
  display: inline-block;
  padding: 6px 15px;
  background-color: rgba(61, 210, 204, 0.4);
  border-radius: 15px;
`;

export const ErrorText = styled.p`
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  text-align: center;
`;
