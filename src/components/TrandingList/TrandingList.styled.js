import styled from 'styled-components';

export const TrendingList = styled.ul`
  max-width: 1210px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const TrendingListItem = styled.li`
  width: 270px;
  height: auto;
  background-color: rgba(33, 33, 33, 0.5);
  border-radius: 15px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export const ImgWrap = styled.div`
  width: 100%;

  > img {
    display: block;
    height: 400px;
    width: 100%;
  }
`;

export const CardTitle = styled.p`
  color: #3dd2cc;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: rgba(61, 210, 204, 0.4);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 10px;
`;
