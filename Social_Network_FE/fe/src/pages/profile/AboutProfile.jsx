import React from "react";
import ImagePersonal from "./CommonComponment/ImagePersonal";
import styled from "styled-components";
import SideBarLeft from './CommonComponment/SideBarLeft'
import SideBarRight from './CommonComponment/SideBarRight'
// background: #edf2f6;
//
const Container = styled.div`
  width: 100%;
  height:100rem; 
  background: #edf2f6;
  display:flex; 
  justify-content:space-around;
  
`;
const InforAbout=styled.div`

`
const AboutProfile = () => {
  return (
    <Container>
      <SideBarLeft style={{width: '15%'}}></SideBarLeft>
      <ImagePersonal style={{minWidth: '80%'}}></ImagePersonal>
      <SideBarRight style={{width: '15%'}}></SideBarRight>
    </Container>
  );
};
export default AboutProfile;
