import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BoxChatContainer = styled.div`
  height: 100%;
  position: relative;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

const HeadingLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeadingAvatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  position: relative;
`;

const HeadingImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const HeadingOnline = styled.div`
  background: #7fba00;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Des = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-left: 12px;
`;

const NameDes = styled.div`
  color: #535165;
  font-size: 16px;
  font-weight: 500;
`;

const StatusDes = styled.div`
  font-size: 12px;
`;

const HeadingRight = styled.div`
  display: flex;
  align-items: center;
`;

const IconOptions = styled.div`
  font-size: 20px;
  margin-left: 12px;
  color: #23d2e2;
  cursor: pointer;
`;

const ListMessages = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  height: calc(80vh - 73px);
  overflow-y: scroll;
  background-color: #f8f9fa;
  padding: 10px;
`;

const ItemMessagesReceiver = styled.li`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
const ItemMessagesSender = styled.li`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const MessageInfo = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 50%;
`;

const Message = styled.div`
  margin: 0 6px;
  max-width: 444px;
  background-color: #dbf4fd;
  border-radius: 12px;
  padding: 10px;
  text-align: left;
`;

const BottomMessages = styled.div`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputMessages = styled.input`
  height: 100%;
  width: 90%;
  outline: none;
  border: none;
  padding-left: 12px;
`;

const LikeMessages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffd300;
  font-size: 28px;
  margin-right: 12px;
`;

const ListIcons = styled.div`
  position: absolute;
  top: -230px;
  box-shadow: -7px 10px 20px rgb(0 0 0 / 10%);
  display: none;
  flex-wrap: wrap;
  padding: 10px;
  margin: 0;
  list-style: none;
  right: 0%;
  width: 328px;
  background: white;

  &:after {
    content: "";
    display: block;
    position: absolute;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 20px solid white;
    bottom: -18px;
    right: 2px;
  }
`;
const Icons = styled.div`
  margin-right: 12px;
  position: relative;

  &:hover ${ListIcons} {
    display: flex;
  }
`;

const IconSmile = styled.div`
  font-size: 28px;
  color: #ffd300;
  cursor: pointer;
`;

const ItemIcon = styled.div`
  margin: 4px;
  cursor: pointer;
`;

const BoxChat = () => {
  const ArrayIcons = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "🥲",
    "😓",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "🥰",
    "😘",
    "😗",
    "😙",
    "😚",
    "😋",
    "😛",
    "😝",
    "😜",
    "🤪",
    "🤨",
    "🧐",
    "🤓",
    "😎",
    "🥸",
    "🤩",
    "🥳",
    "😏",
    "😒",
    "😞",
    "😔",
    "😟",
    "😕",
    "🙁",
    "☹️",
    "😣",
    "😖",
    "😫",
    "😩",
    "🥺",
    "😢",
    "😭",
    "😤",
    "😠",
    "😡",
    "🤬",
    "🤯",
    "😳",
    "🥵",
    "🥶",
    "😱",
    "😨",
    "😰",
    "😥",
    "🤗",
    "🤔",
    "🤭",
    "🤫",
    "🥴",
  ];

  return (
    <BoxChatContainer>
      <Heading>
        <Link to="/" style={{ textDecoration: "none" }}>
          <HeadingLeft>
            <HeadingAvatar>
              <HeadingImage src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/277904683_355457749973025_4136143877988181490_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Vmtp-VcWZ28AX_cyMPm&_nc_ht=scontent.fhan5-10.fna&oh=03_AVL-RpyHECaJBWzW1nErsXSu7W2QHT3dwjX-DIczWRyYjg&oe=627DD276"></HeadingImage>
              <HeadingOnline></HeadingOnline>
            </HeadingAvatar>
            <Des>
              <NameDes>ChristianGrey</NameDes>
              <StatusDes>Online</StatusDes>
            </Des>
          </HeadingLeft>
        </Link>
        <HeadingRight>
          <IconOptions>
            <i class="icofont-phone"></i>
          </IconOptions>
          <IconOptions>
            <i class="icofont-video"></i>
          </IconOptions>
          <IconOptions>
            <i class="icofont-exclamation-circle"></i>
          </IconOptions>
        </HeadingRight>
      </Heading>
      <ListMessages>
        <ItemMessagesReceiver>
          <MessageInfo>
            <Avatar src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/277904683_355457749973025_4136143877988181490_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Vmtp-VcWZ28AX_cyMPm&_nc_ht=scontent.fhan5-10.fna&oh=03_AVL-RpyHECaJBWzW1nErsXSu7W2QHT3dwjX-DIczWRyYjg&oe=627DD276"></Avatar>
            <Message>I'm learning Nodejs</Message>
          </MessageInfo>
        </ItemMessagesReceiver>
        <ItemMessagesSender>
          <MessageInfo>
            <Message>
              Good, iam too, because i want to become backend developer web
            </Message>
            <Avatar src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/277904683_355457749973025_4136143877988181490_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Vmtp-VcWZ28AX_cyMPm&_nc_ht=scontent.fhan5-10.fna&oh=03_AVL-RpyHECaJBWzW1nErsXSu7W2QHT3dwjX-DIczWRyYjg&oe=627DD276"></Avatar>
          </MessageInfo>
        </ItemMessagesSender>
      </ListMessages>
      <BottomMessages>
        <InputMessages placeholder="Write your message here.."></InputMessages>
        <Icons>
          <IconSmile>
            <i class="icofont-wink-smile"></i>
          </IconSmile>
          <ListIcons>
            {ArrayIcons &&
              ArrayIcons.map((item) => {
                return <ItemIcon>{item}</ItemIcon>;
              })}
          </ListIcons>
        </Icons>
        <LikeMessages>
          <i class="icofont-like"></i>
        </LikeMessages>
      </BottomMessages>
    </BoxChatContainer>
  );
};

export default BoxChat;
