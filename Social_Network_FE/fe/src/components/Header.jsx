import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

const Header = () => {
  const Container = styled.div`
    position: relative;
    width: 100%;
    height: 66px;
    background-color: #34465d;
    display: flex;
    align-items: center;
  `;

  const Logo = styled.img`
    width: 18%;
  `;

  const Input = styled.input`
    width: 58%;
    background-color: rgba(255, 255, 255, 0.1);
    outline: none;
    border: none;
  `;

  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Logo src={logo}></Logo>
            <Input></Input>
          </div>
          <div className="col-6">Column</div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
