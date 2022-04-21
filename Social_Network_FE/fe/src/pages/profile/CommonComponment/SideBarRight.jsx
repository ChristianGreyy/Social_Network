import React from "react";
import styled from "styled-components";
import { useState } from "react";
import img from "../../../images/message_img/side-friend1.jpg";
import '../../../style/index.css'
const SideBarRight = () => {
  const [showBoxChat, setShowBoxChat] = useState(false);
  const [optionBoxChatMessage, setOptionBoxChatMessage] = useState(false);
  const ContainerRight = styled.div`
    background: #fff none repeat scroll 0 0;
    max-height: 79vh;
    position: fixed;
    width: 60px;
    z-index: 9;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    overflow-x: hidden;
    // overflow-y: hidden;
  `;
  const ChildMain = styled.div`
    margin-top: 1.5rem;
    background-image: url(${img});
    background-repeat: no-repeat;
    min-height: 2.2rem;
    min-width: 2.2rem;
    border-radius: 100%;
    position: relative;
  `;

  const ImageMessage = styled.img``;
  const StatusMessage = styled.i``;
  const BoxChatMessageDiv = styled.div`
    background: #fbfbfb none repeat scroll 0 0;
    border-radius: 3px;
    width: 300px;
    height: 28rem;
    border: 1px solid #e1e8ed;
    text-align: left;
    // box-shadow: -15px -15px 20px rgb(0 0 0 / 20%);
    color: #757a95;
    font-size: 14px;
    letter-spacing: 0.2px;
    position: relative;
    bottom: -37%;
    left: -470%;
    z-index:1000000000 !important;
  `;
  const HeaderBoxChatMessage = styled.div`
    color: #fff;
    display: flex;
    width: 100%;
    background: #7750f8;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
  `;
  const OptionBoxChatMessageHover = styled.ul`
    positon: absolute;
    background: pink;
    border-radius: 3px;
    top: 100%;
    right: 10rem;
    color: #333;
    z-index: 22;
    height: 5rem;
    width: 7rem;
    list-style-type: none;
    margin: 0 0;
    padding: 0 5px;
    transform: translateX(150%);
  `;
  const OptionBoxChatMessageHoverLi = styled.li`
    &:hover {
      background: white;
    }
  `;
  const InputSendMessageBoxChat = styled.form`
    position: absolute;
    margin-left: 0;
    width:100%;
    bottom:0; 
    display: inline-block;
    padding:0 10px; 
    border-radius: 0;
    background: #f0f0f0;
  `;
  const BoxChatMessageOpen = function () {
    setShowBoxChat(true);
  };
  const BoxChatMessageClose = function () {
    setShowBoxChat(false);
  };
  const OptionBoxChatOpen = function () {
    setOptionBoxChatMessage(true);
    console.log(optionBoxChatMessage);
  };
  const OptionBoxChatClose = function () {
    setOptionBoxChatMessage(false);
  };
  return (
    <div style={{height:'100vh', backgroundColor:'white',width:'64px',position:'fixed',right:'0'}}>
      <ContainerRight className="ContainerScrolbarRight">
        <ChildMain>
          <div
            style={{
              display: "block",
              margin: "0 auto",
              width: "2.2rem",
              position: "relative",
            }}
            onClick={() => BoxChatMessageOpen()}
          >
            <ImageMessage></ImageMessage>
            <i
              class="icofont-ui-add"
              style={{
                position: "absolute",
                top: "120%",
                fontSize: "0.5rem",
                right: "0",
              }}
            ></i>
          </div>
        </ChildMain>
       
        <ChildMain>
          <div
            style={{
              display: "block",
              margin: "0 auto",
              width: "2.2rem",
              position: "relative",
            }}
            onClick={() => BoxChatMessageOpen()}
          >
            <ImageMessage></ImageMessage>
            <i
              class="icofont-ui-add"
              style={{
                position: "absolute",
                top: "120%",
                fontSize: "0.5rem",
                right: "0",
              }}
            ></i>
          </div>
        </ChildMain>
       
        <ChildMain>
          <div
            style={{
              display: "block",
              margin: "0 auto",
              width: "2.2rem",
              position: "relative",
            }}
            onClick={() => BoxChatMessageOpen()}
          >
            <ImageMessage></ImageMessage>
            <i
              class="icofont-ui-add"
              style={{
                position: "absolute",
                top: "120%",
                fontSize: "0.5rem",
                right: "0",
              }}
            ></i>
          </div>
        </ChildMain>


      </ContainerRight>
      {showBoxChat && (
          <BoxChatMessageDiv>
            <HeaderBoxChatMessage>
              <div style={{ display: "flex", flex: "1", alignItems: "center" }}>
                <i
                  class="icofont-ui-add"
                  style={{ fontSize: "50%", margin: "0 1rem 0 1rem" }}
                ></i>
                <h6 style={{ fontSize: "100%" }}>Bucky Barnes</h6>
              </div>
              <div
                style={{
                  display: "flex",
                  flex: "1",
                  alignItems: "center",
                  paddingLeft: "2rem",
                  position: "relative",
                }}
              >
                <div onMouseEnter={OptionBoxChatOpen}>
                  <i
                    class="icofont-dotted-down"
                    style={{ paddingLeft: "3rem" }}
                  ></i>
                </div>
                <div>
                  <i
                    class="icofont-brand-nexus"
                    onClick={() => BoxChatMessageClose()}
                    style={{ paddingLeft: "2rem" }}
                  ></i>
                </div>
              </div>
            </HeaderBoxChatMessage>
            {optionBoxChatMessage && (
              <OptionBoxChatMessageHover onMouseLeave={OptionBoxChatClose}>
                <OptionBoxChatMessageHoverLi>
                  <a style={{ textDecoration: "none" }}>Block Chat</a>
                </OptionBoxChatMessageHoverLi>
                <OptionBoxChatMessageHoverLi>
                  <a style={{ textDecoration: "none" }}>Unblock Chat</a>
                </OptionBoxChatMessageHoverLi>
                <OptionBoxChatMessageHoverLi>
                  <a style={{ textDecoration: "none" }}>Conversation</a>
                </OptionBoxChatMessageHoverLi>
              </OptionBoxChatMessageHover>
            )}
            <InputSendMessageBoxChat>
              <textarea style={{width:'100%',margin:'10px 0'}} placeholder="Post enter to post..."></textarea>
            </InputSendMessageBoxChat>
          </BoxChatMessageDiv>
        )}
    </div>
  );
};
export default SideBarRight;
