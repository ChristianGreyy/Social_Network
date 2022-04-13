import React from "react";
import styled from "styled-components";

const Header = () => {
  const Container = styled.div`
    position: relative;
    width: 100%;
    height: 66px;
  `;

  return (
    <Container>
      <div class="container">
        <div class="row">
          <div class="col-6">Column</div>
          <div class="col-6">Column</div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
