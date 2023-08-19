import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 100%;
  height: 530px;
  padding: 40px 20px;
  color: #fff;

  display: flex;
  align-items: flex-start;
  gap: 30px;
`;

export const ImgWrap = styled.div`
  width: 300px;
  height: 100%;

  border-radius: 20px;
  overflow: hidden;
  flex-shrink: 0;

  > img {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-bottom: 40px;
`;

export const MovieTitle = styled.h2`
  color: #e8e8e8;
  font-size: 38px;
  font-weight: 500;
  margin-bottom: 20px;

  + p {
    color: #3dd2cc;
    margin-bottom: 20px;
  }
`;

export const Overview = styled.h3`
  font-size: 20px;
  margin-bottom: 12px;

  font-style: normal;
  font-weight: 400;
  line-height: normal;

  + p {
    font-weight: 200;
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

export const GenresWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  > li {
    border-radius: 15px;
    padding: 6px 18px;
    border: 1px solid rgba(232, 232, 232, 0.35);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    color: rgba(232, 232, 232, 0.8);
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    font-family: Poppins;
    font-size: 14px;

    &:hover {
      color: #3dd2cc;
      border: 1px solid #3dd2cc;
    }
  }
`;
