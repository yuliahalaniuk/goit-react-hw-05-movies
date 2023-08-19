import styled from 'styled-components';

export const SearchForm = styled.form`
  width: 800px;
  display: block;
  margin: 0 auto;
  position: relative;
  background-color: #191919;
  z-index: 0;
  margin-bottom: 80px;
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  width: 660px;
  height: 60px;
  border-radius: 30px;
  padding: 12px 24px;
  background-color: #3dd2cc;

  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  /* color: #e8e8e8; */
  color: #212121;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  font-family: Poppins;
  font-size: 18px;
  border: 5px solid #191919;

  + button {
    background-color: #fff;
    outline: none;
    border: none;
    width: 140px;
    height: 50px;
    border-radius: 0px 40px 40px 0px;
    position: absolute;
    top: 5px;
    right: 35px;
    padding: 10px 20px;
    text-align: right;
    z-index: -1;

    color: #212121;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    cursor: pointer;
  }
`;
