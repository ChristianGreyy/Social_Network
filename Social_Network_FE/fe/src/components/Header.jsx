import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../images/logo.png";
import avatar from "../images/avatar.jpg";
import "../style/index.css";
import "../style/header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { title, status } = props;

  const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 7;
    height: 66px;
    background-color: #34465d;
    display: flex;
    align-items: center;
  `;

  const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-right: 1px solid #47586d;
  `;

  const Logo = styled.img`
    width: 18%;
  `;

  const Input = styled.input`
    background-color: rgba(255, 255, 255, 0.1);
    outline: none;
    border: none;
    width: 100%;
    border-radius: 24px;
    height: 100%;
    padding: 0 40px 0 24px;
    color: white;
  `;

  const Search = styled.div`
    margin-left: 60px;
    height: 64%;
    background-color: rgba(255, 255, 255, 0.1);
    width: 70%;
    border-radius: 24px;
    color: white;
    position: relative;
  `;

  const SearchIcon = styled.div`
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translate(0, -50%);
    color: #b6b6b6;
    font-size: 16px;
    cursor: pointer;
  `;

  const Description = styled.h6`
    margin: 0;
    padding: 0;
    margin-left: 18px;
    color: white;
  `;

  const HeaderRight = styled.div``;

  const ListIcon = styled.ul`
    padding-left: 0;
    display: flex;
    padding: 0;
    margin: 0;
    height: 100%;
    align-items: center;
    list-style: none;
  `;

  const ItemIcon = styled.li`
    margin: 0 6px;
    display: flex;
    align-items: center;
    color: #999;
    font-size: 18px;
    height: 40px;
    border-radius: 50%;
    width: 40px;
    justify-content: center;
    position: relative;
    z-index: 4;

    &:hover {
      background-color: #2f3f54;
      color: white;
    }
  `;

  const ListDes = styled.ul`
    padding-left: 0;
    display: flex;
    padding: 0;
    margin: 0;
    height: 100%;
    align-items: center;
    list-style: none;
    margin-left: 24px;
  `;

  const ItemDes = styled.li`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0 16px;
  `;

  const LinkDes = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: white;
    font-size: 13px;

    &:hover {
      color: white;
    }
  `;

  const Profile = styled.div`
    margin-left: 32px;
    dipslay: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
  `;

  const ProfileName = styled.div`
    color: white;
    font-weight: bold;
  `;

  const Avatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: relative;
    margin-left: 12px;
  `;

  const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
  `;

  const Online = styled.div`
    width: 10px;
    height: 10px;
    background-color: #7fba00;
    border-radius: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
  `;

  const Setting = styled.div`
    color: white;
    font-size: 20px;
    margin-left: 24px;
  `;

  const DropDown = styled.div`
    position: absolute;
    top: 54px;
    right: -100%;
    z-index: -1;
    box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
    width: 350px;
  `;

  const DropDownList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    background-color: white;
  `;

  const DropDownItem = styled.li`
    height: 61px;
    width: 100%;
    border-bottom: 1px solid #e6ecf5;
    padding: 10px;
    display: flex;
    align-items: center;
    position: relative;
  `;

  const DropDownAvatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: relative;
  `;

  const DropDownImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
  `;

  const DropDownOnline = styled.div`
    width: 10px;
    height: 10px;
    background-color: #7fba00;
    border-radius: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
  `;

  const DropDownTitle = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid #e6ecf5;
    padding: 10px;
  `;

  const DropDownTitleLeft = styled.div`
    color: #515365;
    font-size: 12px;
    font-weight: 500;
  `;

  const DropDownTitleRight = styled.a`
    text-decoration: none;
    color: #48b9ff;
    font-size: 12px;
    font-weight: 500;
  `;

  const DropDownDes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 12px;
  `;

  const DropDownName = styled.div`
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
    color: #515365;
    text-align: left;
    cursor: pointer;

    &:hover {
      color: #fa6342;
    }
  `;

  const DropDownAct = styled.p`
    font-size: 13px;
    padding: 0;
    margin: 0;
    color: #757a95;
  `;

  const DropDownTime = styled.div`
    font-size: 12px;
    color: #b1b1b1;
    position: absolute;
    right: 8px;
  `;

  const DropDownProfile = styled.div`
    position: absolute;
    top: 54px;
    right: -20%;
    box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
    width: 200px;
    background-color: white;
  `;

  const DropDownProfileDes = styled.div`
    border-top: 1px solid #e6ecf5;
    border-bottom: 1px solid #e6ecf5;
    color: black;
    font-weight: bold;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  `;

  const DropDownProfileDesLeft = styled.div``;

  const DropDownProfileDesRight = styled.div``;

  const DropDownProfileList = styled.ul`
    padding: 0;
    margin: 0;
    list-styled: none;
  `;

  const DropDownProfileItem = styled.li`
    display: flex;
    align-items: center;
    padding: 10px;
    &:hover {
      background-color: #f1f1f1;
    }
  `;

  const DropDownProfileIcon = styled.div``;

  const DropDownProfileIconOnline = styled.div`
    width: 10px;
    height: 10px;
    background-color: #7fba00;
    border-radius: 50%;
  `;

  const DropDownProfileIconOffline = styled.div`
    width: 10px;
    height: 10px;
    background-color: #a9a9a9;
    border-radius: 50%;
  `;

  const DropDownProfileIconAway = styled.div`
    width: 10px;
    height: 10px;
    background-color: #ffd300;
    border-radius: 50%;
  `;

  const DropDownProfileText = styled.div`
    font-size: 13px;
    margin-left: 8px;
  `;

  const scrollRight = keyframes`
  from {
    right: -100%;
    opacity: 0;
  } to {
    opacity: 1;
    right: 0;
  }
`;

  const DropDownSetting = styled.div`
    position: fixed;
    border: 1px solid #dfdfdf;
    width: 280px;
    bottom: 0;
    animation: ${scrollRight} linear 1s;
    right: 0;
    height: calc(100vh - 66px);
    background-color: white;
  `;

  const DropDownSettingTitle = styled.h4`
    color: black;
    text-align: left;
    font-size: 18px;
    padding: 10px;
  `;

  const DropDownSettingList = styled.ul`
    list-sytle: none;
    padding: 0;
  `;

  const DropDownSettingItem = styled.li`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e1e8ed;
    padding: 10px;
    justify-content: space-between;
  `;

  const DropDownSettingItemText = styled.div`
    color: #757a95;
    font-size: 14px;
  `;

  const DropDownSettingChooseOn = styled.div`
    display: flex;
    align-items: center;
    width: 52px;
    height: 25px;
    position: relative;
    border-radius: 30px;
    cursor: pointer;
    background-color: #fa6342;
  `;

  const DropDownSettingChooseOff = styled.div`
    display: flex;
    align-items: center;
    width: 52px;
    height: 25px;
    position: relative;
    border-radius: 30px;
    cursor: pointer;
    background-color: #989dbd;
  `;

  const DropDownSettingText = styled.div`
    padding-left: 6px;
    backgrounc-color: white;
    text-transform: uppercase;
    font-size: 12px;
  `;

  const DropDownSettingCircle = styled.div`
    width: 19px;
    height: 19px;
    background-color: white;
    border-radius: 50%;
    margin-left: 4px;
  `;

  const [checkFriend, setCheckFriend] = useState(false);
  const [checkNotification, setCheckNotification] = useState(false);
  const [checkMessage, setCheckMessage] = useState(false);
  const [checkProfile, setCheckProfile] = useState(false);
  const [checkUseNightMode, setCheckUseNightMode] = useState(true);
  const [checkTurnNotification, setCheckTurnNotification] = useState(true);
  const [checkNotificationSound, setCheckNotificationSound] = useState(true);
  const [checkShowProfile, setCheckShowProfile] = useState(true);
  const [checkTagMe, setCheckTagMe] = useState(true);
  const [checkDropDownSetting, setCheckDropDownSetting] = useState(false);
  const ref = useRef(null);

  const handleFriend = () => {
    setCheckFriend(!checkFriend);
  };

  const handleNotification = () => {
    setCheckNotification(!checkNotification);
  };

  const handleMessage = () => {
    setCheckMessage(!checkMessage);
  };

  const handleProfile = () => {
    setCheckProfile(!checkProfile);
  };

  return (
    <Container>
      <div className="container" style={{ height: "100%" }}>
        <div className="row" style={{ height: "100%" }}>
          <HeaderLeft className="col-6">
            <Logo src={logo}></Logo>
            <Search>
              <Input
                className="header__input"
                placeholder="Seach People, Pages, Groups etc"
              ></Input>
              <SearchIcon>
                <i class="icofont-search"></i>
              </SearchIcon>
            </Search>
            <Description>{title}</Description>
          </HeaderLeft>
          <HeaderRight className="col-6" style={{ display: "flex" }}>
            {status == "no" && (
              <>
                <ListIcon>
                  <ItemIcon>
                    <i style={{ cursor: "pointer" }} class="icofont-home"></i>
                  </ItemIcon>
                  <ItemIcon>
                    <i style={{ cursor: "pointer" }} class="icofont-world"></i>
                  </ItemIcon>
                  <ItemIcon>
                    <i
                      style={{ cursor: "pointer" }}
                      class="icofont-question-circle"
                    ></i>
                  </ItemIcon>
                </ListIcon>
                <ListDes>
                  <ItemDes>
                    <LinkDes href="">Privacy & Policy</LinkDes>
                  </ItemDes>
                  <ItemDes>
                    <LinkDes href="">Contact</LinkDes>
                  </ItemDes>
                  <ItemDes>
                    <LinkDes href="">Faq's</LinkDes>
                  </ItemDes>
                  <ItemDes>
                    <LinkDes href="">Forum</LinkDes>
                  </ItemDes>
                </ListDes>
              </>
            )}
            {status == "yes" && (
              <>
                <ListIcon>
                  <ItemIcon>
                    <i style={{ cursor: "pointer" }} class="icofont-home"></i>
                  </ItemIcon>
                  <ItemIcon onClick={handleFriend}>
                    <i style={{ cursor: "pointer" }} class="icofont-user"></i>
                    {checkFriend && (
                      <DropDown>
                        <DropDownList>
                          <DropDownTitle>
                            <DropDownTitleLeft>4 New Request</DropDownTitleLeft>
                            <DropDownTitleRight>
                              Mark All Requests
                            </DropDownTitleRight>
                          </DropDownTitle>
                          <DropDownItem>
                            <DropDownAvatar>
                              <DropDownImg src={avatar}></DropDownImg>
                              <DropDownOnline></DropDownOnline>
                            </DropDownAvatar>
                            <DropDownDes>
                              <Link
                                to="/user"
                                style={{ textDecoration: "none" }}
                              >
                                <DropDownName className="header__dropdown-name">
                                  Trương Hưng
                                </DropDownName>
                              </Link>
                              <DropDownAct>
                                sent you a friend request
                              </DropDownAct>
                            </DropDownDes>
                            <DropDownTime>2 min</DropDownTime>
                          </DropDownItem>
                          <DropDownItem>
                            <DropDownAvatar>
                              <DropDownImg src={avatar}></DropDownImg>
                              <DropDownOnline></DropDownOnline>
                            </DropDownAvatar>
                            <DropDownDes>
                              <Link
                                to="/user"
                                style={{ textDecoration: "none" }}
                              >
                                <DropDownName className="header__dropdown-name">
                                  Nguyễn Quý
                                </DropDownName>
                              </Link>
                              <DropDownAct>
                                sent you a friend request
                              </DropDownAct>
                            </DropDownDes>
                            <DropDownTime>5 min</DropDownTime>
                          </DropDownItem>
                        </DropDownList>
                      </DropDown>
                    )}
                  </ItemIcon>
                  <ItemIcon onClick={handleNotification}>
                    <i style={{ cursor: "pointer" }} class="icofont-alarm"></i>
                    {checkNotification && (
                      <DropDown>
                        <DropDownList>
                          <DropDownTitle>
                            <DropDownTitleLeft>
                              4 New Notifications
                            </DropDownTitleLeft>
                            <DropDownTitleRight>
                              Mark All As Read
                            </DropDownTitleRight>
                          </DropDownTitle>
                          <DropDownItem>
                            <DropDownAvatar>
                              <DropDownImg src={avatar}></DropDownImg>
                              <DropDownOnline></DropDownOnline>
                            </DropDownAvatar>
                            <DropDownDes>
                              <Link
                                to="/user"
                                style={{ textDecoration: "none" }}
                              >
                                <DropDownName className="header__dropdown-name">
                                  Trương Hưng
                                </DropDownName>
                              </Link>
                              <DropDownAct>commented your post</DropDownAct>
                            </DropDownDes>
                            <DropDownTime>2 min</DropDownTime>
                          </DropDownItem>
                          <DropDownItem>
                            <DropDownAvatar>
                              <DropDownImg src={avatar}></DropDownImg>
                              <DropDownOnline></DropDownOnline>
                            </DropDownAvatar>
                            <DropDownDes>
                              <Link
                                to="/user"
                                style={{ textDecoration: "none" }}
                              >
                                <DropDownName className="header__dropdown-name">
                                  Nguyễn Quý
                                </DropDownName>
                              </Link>
                              <DropDownAct>commented your post</DropDownAct>
                            </DropDownDes>
                            <DropDownTime>5 min</DropDownTime>
                          </DropDownItem>
                        </DropDownList>
                      </DropDown>
                    )}
                  </ItemIcon>
                  <ItemIcon onClick={handleMessage}>
                    <i style={{ cursor: "pointer" }} class="icofont-chat"></i>
                    {checkMessage && (
                      <DropDown>
                        <DropDownList>
                          <DropDownTitle>
                            <DropDownTitleLeft>4 New Message</DropDownTitleLeft>
                            <DropDownTitleRight>
                              Mark All As Read
                            </DropDownTitleRight>
                          </DropDownTitle>
                          <DropDownItem>
                            <DropDownAvatar>
                              <DropDownImg src={avatar}></DropDownImg>
                              <DropDownOnline></DropDownOnline>
                            </DropDownAvatar>
                            <DropDownDes>
                              <Link
                                to="/user"
                                style={{ textDecoration: "none" }}
                              >
                                <DropDownName className="header__dropdown-name">
                                  Trương Hưng
                                </DropDownName>
                              </Link>
                              <DropDownAct>
                                Hello, do you want to code with me?
                              </DropDownAct>
                            </DropDownDes>
                            <DropDownTime>2 min</DropDownTime>
                          </DropDownItem>
                          <DropDownItem>
                            <DropDownAvatar>
                              <DropDownImg src={avatar}></DropDownImg>
                              <DropDownOnline></DropDownOnline>
                            </DropDownAvatar>
                            <DropDownDes>
                              <Link
                                to="/user"
                                style={{ textDecoration: "none" }}
                              >
                                <DropDownName className="header__dropdown-name">
                                  Nguyễn Quý
                                </DropDownName>
                              </Link>
                              <DropDownAct>I'm learning NodeJS</DropDownAct>
                            </DropDownDes>
                            <DropDownTime>5 min</DropDownTime>
                          </DropDownItem>
                        </DropDownList>
                      </DropDown>
                    )}
                  </ItemIcon>
                  <ItemIcon>
                    <i style={{ cursor: "pointer" }} class="icofont-world"></i>
                  </ItemIcon>
                  <ItemIcon>
                    <i
                      style={{ cursor: "pointer" }}
                      class="icofont-question-circle"
                    ></i>
                  </ItemIcon>
                  <Profile style={{ display: "flex" }} onClick={handleProfile}>
                    <ProfileName>ChristianGrey</ProfileName>
                    <Avatar>
                      <Image src={avatar}></Image>
                      <Online></Online>
                    </Avatar>
                    {checkProfile && (
                      <>
                        <DropDownProfile>
                          <DropDownProfileDes>
                            <DropDownProfileDesLeft>
                              Chat Setting
                            </DropDownProfileDesLeft>
                          </DropDownProfileDes>
                          <DropDownProfileList>
                            <DropDownProfileItem>
                              <DropDownProfileIconOnline></DropDownProfileIconOnline>
                              <DropDownProfileText>Online</DropDownProfileText>
                            </DropDownProfileItem>
                            <DropDownProfileItem>
                              <DropDownProfileIconAway></DropDownProfileIconAway>
                              <DropDownProfileText>Away</DropDownProfileText>
                            </DropDownProfileItem>
                            <DropDownProfileItem>
                              <DropDownProfileIconOffline></DropDownProfileIconOffline>
                              <DropDownProfileText>Offline</DropDownProfileText>
                            </DropDownProfileItem>
                          </DropDownProfileList>
                          <DropDownProfileDes>
                            <DropDownProfileDesLeft>
                              User Setting
                            </DropDownProfileDesLeft>
                          </DropDownProfileDes>
                          <DropDownProfileList>
                            <Link
                              to="/user"
                              style={{
                                textDecoration: "none",
                                color: "#757a95",
                              }}
                            >
                              <DropDownProfileItem>
                                <DropDownProfileIcon>
                                  <i class="icofont-user-alt-3"></i>
                                </DropDownProfileIcon>
                                <DropDownProfileText>
                                  View Profile
                                </DropDownProfileText>
                              </DropDownProfileItem>
                            </Link>
                            <Link
                              to="/user"
                              style={{
                                textDecoration: "none",
                                color: "#757a95",
                              }}
                            >
                              <DropDownProfileItem>
                                <DropDownProfileIcon>
                                  <i class="icofont-edit"></i>
                                </DropDownProfileIcon>
                                <DropDownProfileText>
                                  Edit Profile
                                </DropDownProfileText>
                              </DropDownProfileItem>
                            </Link>
                            <Link
                              to="/user"
                              style={{
                                textDecoration: "none",
                                color: "#757a95",
                              }}
                            >
                              <DropDownProfileItem>
                                <DropDownProfileIcon>
                                  <i class="icofont-settings-alt"></i>
                                </DropDownProfileIcon>
                                <DropDownProfileText>
                                  Account Setting
                                </DropDownProfileText>
                              </DropDownProfileItem>
                            </Link>
                            <Link
                              to="/user"
                              style={{
                                textDecoration: "none",
                                color: "#757a95",
                                color: "#fa6342",
                              }}
                            >
                              <DropDownProfileItem>
                                <DropDownProfileIcon>
                                  <i class="icofont-logout"></i>
                                </DropDownProfileIcon>
                                <DropDownProfileText>
                                  Log Out
                                </DropDownProfileText>
                              </DropDownProfileItem>
                            </Link>
                          </DropDownProfileList>
                        </DropDownProfile>
                      </>
                    )}
                  </Profile>
                  <Setting
                    onClick={() => {
                      setCheckDropDownSetting(!checkDropDownSetting);
                    }}
                  >
                    <i
                      style={{ cursor: "pointer" }}
                      class="icofont-ui-settings"
                    ></i>
                    {checkDropDownSetting && (
                      <>
                        <DropDownSetting ref={ref}>
                          <DropDownSettingTitle>
                            General Setting
                          </DropDownSettingTitle>
                          <DropDownSettingList>
                            <DropDownSettingItem>
                              <DropDownSettingItemText>
                                Use Night Mode
                              </DropDownSettingItemText>
                              {checkUseNightMode && (
                                <>
                                  <DropDownSettingChooseOn
                                    onClick={() => {
                                      setCheckUseNightMode(false);
                                    }}
                                  >
                                    <DropDownSettingText>
                                      ON
                                    </DropDownSettingText>
                                    <DropDownSettingCircle>
                                      {" "}
                                    </DropDownSettingCircle>
                                  </DropDownSettingChooseOn>
                                </>
                              )}
                              {!checkUseNightMode && (
                                <>
                                  <DropDownSettingChooseOff
                                    onClick={() => {
                                      setCheckUseNightMode(true);
                                    }}
                                  >
                                    <DropDownSettingCircle>
                                      {" "}
                                    </DropDownSettingCircle>
                                    <DropDownSettingText>
                                      OFF
                                    </DropDownSettingText>
                                  </DropDownSettingChooseOff>
                                </>
                              )}
                            </DropDownSettingItem>
                            <DropDownSettingItem>
                              <DropDownSettingItemText>
                                Notifications
                              </DropDownSettingItemText>
                              {checkTurnNotification && (
                                <>
                                  <DropDownSettingChooseOn
                                    onClick={() => {
                                      setCheckTurnNotification(false);
                                    }}
                                  >
                                    <DropDownSettingText>
                                      ON
                                    </DropDownSettingText>
                                    <DropDownSettingCircle>
                                      {" "}
                                    </DropDownSettingCircle>
                                  </DropDownSettingChooseOn>
                                </>
                              )}
                              {!checkTurnNotification && (
                                <>
                                  <DropDownSettingChooseOff
                                    onClick={() => {
                                      setCheckTurnNotification(true);
                                    }}
                                  >
                                    <DropDownSettingCircle>
                                      {" "}
                                    </DropDownSettingCircle>
                                    <DropDownSettingText>
                                      OFF
                                    </DropDownSettingText>
                                  </DropDownSettingChooseOff>
                                </>
                              )}
                            </DropDownSettingItem>
                            <DropDownSettingItem>
                              <DropDownSettingItemText>
                                Notification Sound
                              </DropDownSettingItemText>
                              {checkNotificationSound && (
                                <>
                                  <DropDownSettingChooseOn
                                    onClick={() => {
                                      setCheckNotificationSound(false);
                                    }}
                                  >
                                    <DropDownSettingText>
                                      ON
                                    </DropDownSettingText>
                                    <DropDownSettingCircle>
                                      {" "}
                                    </DropDownSettingCircle>
                                  </DropDownSettingChooseOn>
                                </>
                              )}
                              {!checkNotificationSound && (
                                <>
                                  <DropDownSettingChooseOff
                                    onClick={() => {
                                      setCheckNotificationSound(true);
                                    }}
                                  >
                                    <DropDownSettingCircle>
                                      {" "}
                                    </DropDownSettingCircle>
                                    <DropDownSettingText>
                                      OFF
                                    </DropDownSettingText>
                                  </DropDownSettingChooseOff>
                                </>
                              )}
                            </DropDownSettingItem>
                            <DropDownSettingItem>
                              <DropDownSettingItemText>
                                Show Profile
                              </DropDownSettingItemText>
                              {checkShowProfile && (
                                <>
                                  <DropDownSettingChooseOn
                                    onClick={() => {
                                      setCheckShowProfile(false);
                                    }}
                                  >
                                    <DropDownSettingText>
                                      ON
                                    </DropDownSettingText>
                                    <DropDownSettingCircle>
                                      {" "}
                                    </DropDownSettingCircle>
                                  </DropDownSettingChooseOn>
                                </>
                              )}
                              {!checkShowProfile && (
                                <>
                                  <DropDownSettingChooseOff
                                    onClick={() => {
                                      setCheckShowProfile(true);
                                    }}
                                  >
                                    <DropDownSettingCircle>
                                      {" "}
                                    </DropDownSettingCircle>
                                    <DropDownSettingText>
                                      OFF
                                    </DropDownSettingText>
                                  </DropDownSettingChooseOff>
                                </>
                              )}
                            </DropDownSettingItem>
                            <DropDownSettingItem>
                              <DropDownSettingItemText>
                                Tag me ?
                              </DropDownSettingItemText>
                              {checkTagMe && (
                                <>
                                  <DropDownSettingChooseOn
                                    onClick={() => {
                                      setCheckTagMe(false);
                                    }}
                                  >
                                    <DropDownSettingText>
                                      ON
                                    </DropDownSettingText>
                                    <DropDownSettingCircle>
                                      {" "}
                                    </DropDownSettingCircle>
                                  </DropDownSettingChooseOn>
                                </>
                              )}
                              {!checkTagMe && (
                                <>
                                  <DropDownSettingChooseOff
                                    onClick={() => {
                                      setCheckTagMe(true);
                                    }}
                                  >
                                    <DropDownSettingCircle>
                                      {" "}
                                    </DropDownSettingCircle>
                                    <DropDownSettingText>
                                      OFF
                                    </DropDownSettingText>
                                  </DropDownSettingChooseOff>
                                </>
                              )}
                            </DropDownSettingItem>
                          </DropDownSettingList>
                        </DropDownSetting>
                      </>
                    )}
                  </Setting>
                </ListIcon>
              </>
            )}
          </HeaderRight>
        </div>
      </div>
    </Container>
  );
};

export default Header;
