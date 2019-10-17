import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Poop = styled.div`

`;

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    background-color: lightgray;
  }
`;

export const CastWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  background-color: white;
  overflow: hidden;
`;

export const CastSection = styled.div`
  width: 700px;
  float: right;
  margin: 20px auto;
`;

export const CastHeader = styled.h2`
  display: inline-block;
  margin-top: 5px;
  margin-bottom: 5px;

  ::before {
    content: ' ';
    display: inline-block;
    background-color: #FA320A;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  ::after {
    content: ' ';
    display: inline-block;
    background-color: #FA320A;
    width: 576.66px;
    height: 20px;
    margin-left: 10px;
  }
`;

export const CastViewAll = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Satisfy|Roboto&display=swap');

  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #3976DC;
  cursor: pointer;
  margin-right: 18px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CastArrowDown = styled.span`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #3976DC;
  margin-left: 2px;
`;

export const CastArrowUp = styled.span`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #3976DC;
  margin-left: 2px;
`;

export const CastPhotosDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 700px;
`;

export const CastItem = styled.div`
  width: 110px;
  margin: 15px 2px;
  align-items: flex-start;
`;

export const CastImg = styled.img`
  width: 100px;
  height: 120px;
  object-fit: cover;
  :hover {
    cursor: pointer;
  }
`;

export const CastActor = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Satisfy|Roboto&display=swap');

  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  :hover {
    color: #3976DC;
    cursor: pointer;
  }
`;

export const CastCharacter = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Satisfy|Roboto&display=swap');

  font-family: 'Roboto', sans-serif;
  color: #959595;
  font-size: 10.5px;
`;

export const ErrorMessage = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Satisfy|Roboto&display=swap');

  font-family: 'Satisfy', sans-serif;
  text-align: center;
  color: #F24130;
  margin: 20px auto;
`;
