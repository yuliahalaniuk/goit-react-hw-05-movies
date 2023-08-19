import styled from 'styled-components';

// export const StyledList = styled.ul`
//   max-width: 1210px;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 30px;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto;
//   padding-left: 20px;
//   padding-right: 20px;
// `;

export const StyledList = styled.ul`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ReviewItem = styled.li`
  position: relative;
  border: none;
  background-color: #212121;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  padding: 40px;
  border-radius: 15px;

  > b {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    top: 0;

    display: inline-block;
    margin: 0 auto;
    padding: 6px 12px;
    border-radius: 15px;
    background: rgba(61, 210, 204, 0.4);
    margin-bottom: 16px;
  }

  > p {
    font-weight: 200;
  }
`;
export const WarningText = styled.p`
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
`;
