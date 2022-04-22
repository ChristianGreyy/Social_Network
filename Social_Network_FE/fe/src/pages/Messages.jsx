import React from "react";
import Header from "../components/Header";
import styled, { keyframes } from "styled-components";
import Messenger from "../components/messages/Messenger";
import BoxChat from "../components/messages/BoxChat";
import Profile from "../components/messages/Profile";

const MessengerContainer = styled.div`
  margin-top: 66px;
  height: calc(100vh - 66px);
  overflow: hidden;
`;

const Messages = () => {
  return (
    <div>
      <Header status="yes" title="CHAT MESSENGER" />
      <MessengerContainer className="container-fluid">
        <div className="row" style={{ height: "100%" }}>
          <div className="col-3" style={{ width: "27%", height: "100%" }}>
            <Messenger></Messenger>
          </div>
          <div
            className="col-5"
            style={{ width: "48%", padding: "0", height: "100%" }}
          >
            <BoxChat></BoxChat>
          </div>
          <div className="col-3" style={{ width: "25%" }}>
            <Profile></Profile>
          </div>
        </div>
      </MessengerContainer>
    </div>
  );
};

export default Messages;
