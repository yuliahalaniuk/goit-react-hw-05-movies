import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;

  padding-left: 20px;
  padding-right: 20px;
`;

export const StyledListItem = styled.li`
  width: 200px;
  height: 420px;
  border-radius: 15px;
  background: #212121;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  > div {
    padding: 10px;
    font-weight: 200;
  }
`;

export const StyledName = styled.p`
  color: #3dd2cc;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const WarningText = styled.p`
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
`;
