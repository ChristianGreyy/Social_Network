import React, { useEffect, useContext, useState } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import authContext from "../../contexts/authContext";
import axios from "axios";
import socketContext from "../../contexts/socketContext";
import jwt_decode from "jwt-decode";

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

const Submit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  font-size: 28px;
  cursor: pointer;
  color: #ffd300;
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

  const params = useParams();
  const token = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [userId, setUserId] = useState(null);
  const [messages, setMessages] = useState(null);
  const [user, setUser] = useState(null);
  const [myUser, setMyUser] = useState(null);
  const [inputValue, setInputValue] = useState("");

  // Fetch the first user chat
  const fetchMessenger = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/message", {
        headers: {
          authorization: token,
        },
      });
      const messengers = res.data.messengers;
      const firstId = messengers[0].userId;
      navigate(`/messages/${firstId}`);
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch when onclick the messenger
  const fetchBoxChat = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/message/${params.userId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      // console.log(res.data.data.messengers);
      setMessages(res.data.data.messengers);
      res.data.data.messengers.forEach((msg) => {
        if (params.userId == msg.senderId._id) {
          setUser(msg.senderId);
        } else if (params.userId == msg.receiverId._id) {
          setUser(msg.receiverId);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  // when click user messenger
  useEffect(() => {
    if (params.userId) {
      fetchBoxChat();
    } else {
      fetchMessenger();
    }
  }, [params.userId]);

  const decoded = jwt_decode(token);
  const myUserId = decoded.userId;

  // console.log(token);

  const fetchUser = async (myUserId) => {
    try {
      const res = await axios(`http://localhost:8080/api/user/${myUserId}`, {
        headers: {
          authorization: token,
        },
      });
      const data = res.data.data;
      const user = data.user;
      setMyUser(user);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser(myUserId);
  }, []);

  // console.log(myUser);

  const socket = useContext(socketContext);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    socket.emit("/client-to-server/postMessage", {
      inputValue,
      userId: user._id,
      myUserId: myUser._id,
    });
    socket.on("/server-to-client/postMessage", (messengers) => {
      setMessages(messengers);
    });
    setInputValue("");
  };

  return (
    <BoxChatContainer>
      <Heading>
        <Link to="/" style={{ textDecoration: "none" }}>
          <HeadingLeft>
            <HeadingAvatar>
              <HeadingImage src={user ? user.avatar : ""}></HeadingImage>
              <HeadingOnline></HeadingOnline>
            </HeadingAvatar>
            <Des>
              <NameDes>
                {user ? user.lastname.concat(" ").concat(user.firstname) : ""}
              </NameDes>
              <StatusDes>Online</StatusDes>
            </Des>
          </HeadingLeft>
        </Link>
        <HeadingRight>
          <IconOptions>
            <i className="icofont-phone"></i>
          </IconOptions>
          <IconOptions>
            <i className="icofont-video"></i>
          </IconOptions>
          <IconOptions>
            <i className="icofont-exclamation-circle"></i>
          </IconOptions>
        </HeadingRight>
      </Heading>
      <ListMessages>
        {messages &&
          messages.map((msg, index) => {
            if (params.userId == msg.senderId._id) {
              return (
                <ItemMessagesReceiver key={msg._id}>
                  <MessageInfo>
                    <Avatar src={msg.senderId.avatar}></Avatar>
                    <Message>{msg.content}</Message>
                  </MessageInfo>
                </ItemMessagesReceiver>
              );
            } else {
              return (
                <ItemMessagesSender key={msg._id}>
                  <MessageInfo>
                    <Message>{msg.content}</Message>
                    <Avatar src={msg.senderId.avatar}></Avatar>
                  </MessageInfo>
                </ItemMessagesSender>
              );
            }
          })}
        {/* <ItemMessagesReceiver>
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
        </ItemMessagesSender> */}
      </ListMessages>
      <BottomMessages>
        <InputMessages
          placeholder="Write your message here.."
          value={inputValue}
          onChange={handleOnChange}
        ></InputMessages>
        {inputValue && (
          <>
            <Submit onClick={handleSubmit}>
              <i className="icofont-location-arrow"></i>
            </Submit>
          </>
        )}
        {!inputValue && (
          <>
            <Icons>
              <IconSmile>
                <i className="icofont-wink-smile"></i>
              </IconSmile>
              <ListIcons>
                {ArrayIcons &&
                  ArrayIcons.map((item, index) => {
                    return <ItemIcon key={index}>{item}</ItemIcon>;
                  })}
              </ListIcons>
            </Icons>
            <LikeMessages>
              <i className="icofont-like"></i>
            </LikeMessages>
          </>
        )}
      </BottomMessages>
    </BoxChatContainer>
  );
};

export default BoxChat;
