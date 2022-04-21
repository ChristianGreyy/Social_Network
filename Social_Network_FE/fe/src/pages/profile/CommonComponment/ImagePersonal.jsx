import React from "react";
// import SidebarRight  from "./CommonComponment/SidebarRight";
import backImage from "../../../images/profile/profile-image.jpg";
import authorImage from "../../../images/profile/author.jpg";
import styled from "styled-components";
import { useState } from "react";
import imageMovie from "../../../images/profile/movies/tvplay1.jpg";
import Slider from "react-slick";
import "../../../style/index.css";
import imageFriend from "../../../images/profile/recent3.jpg";
// import Icofont from 'react-icofont';

const ImagePersonal = () => {
  const [sendMessage, setSendMessage] = useState(false);
  const [navBarSetting, setNavBarSetting] = useState(false);
  const [scaleUpImage, setScaleUpImage] = useState(imageFriend);
  const [displayScaleUp, setDisplayScaleUp] = useState(false);
  const styleA = {
    textDecoration: "none",
  };

  const Container = styled.div`
    max-width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    over-flow: hidden;
  `;
  const ImgProfile = styled.div`
    width: 100%;
    height: 20rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px 5px 0 0;
    background-image: url(${backImage});
    border-radius: 5px 5px 0 0;
    position: relative;
    background-position: left -1rem center;
  `;

  const Author = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    margin-left: 15px;
    text-align: center;
    max-width: 155px;
    width: 155px;
    height: 13rem;
    flex-direction: column;
    top: 45%;
  `;
  const AuthorImage = styled.img`
    border-radius: 100%;
    max-width: 155px;
    height: 10rem;
    width: 155px;
    left: 1%;
    background-image: url(${authorImage});
    border: 3px solid #fff;
    margin-bottom: 1rem;
  `;
  const NameProfile = styled.div`
    top: 12rem;
    color: #333;
    font-size: 0.2rem;
    position: absolute;
    z-index: 100000;
    line-height: 10px;
  `;
  const NavBarProfile = styled.div`
    width: 100%;
    height: 4rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0;
    position: relative;
    background-position: left -1rem center;
    display: flex;
    background: white;
    align-items: flex-end;
  `;
  const NavBarProfileHoverMenu = styled.div`
    position: absolute;
    top: 100%;
    min-width: 8rem;
    right: -500%;
    background: white;
    margin: 0 0;
    background:
    border-radius: 10px;
    &:hover .navbarHovermenuli1 {
      background: gray;
    }
    &:hover .navbarHovermenuli2 {
      background: gray;
    }
    z-index:100000000;
  `;
  const ProfileControl = styled.ul`
    background: rgba(255, 255, 255, 0.4) none repeat scroll 0 0;
    border-radius: 7px 0 0 7px;
    bottom: 20px;
    display: inline-block;
    margin: 0;
    padding: 7px 14px;
    position: absolute;
    right: 0;
    z-index: 8;
  `;
  const ProfileControlLi = styled.li`
    display: inline-block;
    margin: 0 5px;
    color: white;
    &:hover {
      color: white;
    }
    &:hover .hoverProfileControll {
      color: white;
      display: block;
    }
    &:hover .hoverProfileControllmenu {
      color: white;
      display: block;
    }
  `;
  const ProfileControla1 = styled.a`
    border-radius: 100%;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 40px;
    font-size: 16px;
    background: #fa6342;
    text-decoration: none;
    color: white;
    position: relative;

    &:hover {
      color: white;
      background: #fa6342;
    }
  `;
  const ProfileControla2 = styled.a`
    border-radius: 100%;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 40px;
    font-size: 16px;
    text-decoration: none;
    background: #7750f8;
    color: white;
    position: relative;
    &:hover {
      color: white;
      background: #fa6342;
    }
  `;
  const ProfileControla3 = styled.a`
    border-radius: 100%;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 40px;
    font-size: 16px;
    text-decoration: none;
    position: relative;
    background: #23d2e2;
    color: white;
    &:hover {
      color: white;
      background: #fa6342;
    }
  `;
  const ProfileControla4 = styled.a`
    border-radius: 100%;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 40px;
    position: relative;
    font-size: 16px;
    text-decoration: none;
    background: #857ec3;
    color: white;
    &:hover {
      color: white;
      background: #fa6342;
    }
  `;
  const ProfileControlHover = styled.div`
    min-width: 6rem;
    max-height: 2rem;
    position: absolute;
    background: black;
    color: white;
    font-size: 80%;
    border-radius: 5%;
    margin: 0 auto;
    top: -100%;
    right: -80%;
    display: none;
    float: left;
    margin: 0 0;
    padding: 0 0;
  `;
  const ProfileControlHovermenu0 = styled.div`
    min-width: 4.5rem;
    max-height: 2rem;
    position: absolute;
    background: white;
    color: white;
    font-size: 80%;
    border-radius: 5%;
    margin: 0 auto;
    top: 110%;
    right: -90%;
    display: none;
    float: left;
    margin: 0 0;
    padding: 0 0;
  `;
  const ProfileControlHoverMenu = styled.ul`
    min-width: 9rem;
    background: white;
    height: 15rem;
    line-height: 40px;
    color: gray;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-left;
    margin: 0 0;
    padding: 0 0;
  `;
  const ProfileControlHoverMenuLi = styled.li`
      color:gray; 
      text-align:left
      list-style-type:none; 
     
      margin:0 0; 
    padding:0 10px; 
    &:hover {
      color: black;
      background: rgb(231, 225, 225);;
    }
  `;
  const ProfileControlHoverMenuA = styled.a`
    color: gray;
    margin: 0 0;
    padding: 0 0;
    float: left;
    &:hover {
      color: black;
      background: rgb(231, 225, 225);
    }
  `;
  const ProfileControllSendMessageClick = styled.div`
    position: fixed;
    width: 100%;
    height: 1000rem;
    padding: 0 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 99999;
    transition: all 0.25s linear 0s;
    color: #757a95;
    font-size: 14px;
    letter-spacing: 0.2px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const SendMessageBox = styled.div`
    width: 400px;
    border-radius: 5px;
    height: 300px;
    background: #fff none repeat scroll 0 0;
    position: absolute;
    top: 5rem;
    text-align: center;
  `;
  const InputSendMassageBox = styled.input`
    background: #edf2f6 none repeat scroll 0 0;
    border-radius: 4px;
    font-size: 13px;
    padding: 14px 15px;
    width: 100%;
    color: #535165;
    border: 1px solid #e4e4e4;
    margin: 0.5rem 0;
  `;
  const ButtonSubMitMessage = styled.button`
    border: medium none;
    border-radius: 30px;
    color: #fff;
    float: right;
    font-size: 13px;
    font-weight: 500;
    padding: 10px 30px;
    transition: all 0.2s linear 0s;
    background: #fa6342;
  `;
  const ContainerInfo = styled.div`
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  `;
  const PersonalInfo = styled.div`
    min-width: 30% !important;
    margin-right: 1.8rem;
    background: white;
    border-radius: 5px;
    color: black;
    padding-top: 2rem;
    padding-left: 0.8rem;
  `;
  const ContainerInfoRight = styled.div`
    max-width: 67%;
    over-flow: hidden;
    border-radius: 5px;
    padding-left: 1.5rem;
    height: auto;
  `;
  const GeneralInfor = styled.div`
    max-width: 100% !important;
    background: white;
    color: black;
    border-radius: 5px;
    padding-left: 1.5rem;
    padding-top: 2rem;
    max-height: 28rem;
    over-flow: hidden;
  `;

  const LabelInfor = styled.div`
    display: flex;
    align-items: center;
  `;
  const GeneralInforChild = styled.div`
    max-width: 100%;
    display: flex;
    height: auto;
  `;
  const FavouritMovies = styled.div`
    min-width: 100%;
    background: white;
    color: black;
    border-radius: 5px;
    padding-left: 1.5rem;
    margin-top: 2rem;
    max-height: 28rem;
  `;
  const FriendList = styled.div`
    max-width: 100%;
    background: white;
    color: black;
    border-radius: 5px;
    padding-left: 1.5rem;
    margin-top: 2rem;
    max-height: 28rem;
  `;
  const PhotoList = styled.div`
    max-width: 100%;
    background: white;
    color: black;
    border-radius: 5px;
    padding-left: 1.5rem;
    margin-top: 2rem;
    max-height: 28rem;
  `;
  const PhotoListScaleUp = styled.img``;
  const DivScaleImage = styled.div`
    position: fixed;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 99999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
  `;
  const ScaleUpImage = styled.img`
    width: 20rem;
    height: 20rem;
    margin: 0 auto;
    display: block;

    margin: 0 auto;
    overflow: hidden;
    text-align: center;
  `;
  const ScaleUpExit = styled.div`
    position: relative;
    top: 1rem;
    width: 10rem;
    height: 10rem;
    cursor: pointer;
  `;
  const ScaleUpImagefc = function (e) {
    setScaleUpImage(e.target.src);
    setDisplayScaleUp(true);
    console.log(scaleUpImage);
    console.log(displayScaleUp);
  };
  const handleScaleImageUp = function () {
    setDisplayScaleUp(false);
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "fa6342",
          transform: `translate(-1.5rem,-0.5rem )`,
          backgroundColor: "gray",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          marginRight: "1rem",
          color: "fa6342",
          backgroundColor: "gray",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }
  const setting_Slide = {
    className: "settingSlide",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const handleSendMessageOpen = function () {
    setSendMessage(true);
  };
  const handleSendMessageClose = function () {
    setSendMessage(false);
  };
  const onClickItem = (e) => {
    // `current` points to the mounted file input element
    e.click();
  };
  const NavbarHoverSettingEnter = function () {
    setNavBarSetting(true);
  };
  const NavbarHoverSettingEnterLeave = function () {
    setNavBarSetting(false);
  };
  const ClickMenuNavBar=function(e){
        e.target.src.color='pink'
  }
  return (
    <div style={{ width: "100%" }}>
      {sendMessage && (
        <ProfileControllSendMessageClick>
          <SendMessageBox>
            <form
              method="post"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: "1rem",
                  top: "1rem",
                  fontSize: "1rem",
                }}
              >
                <i
                  class="icofont-brand-nexus"
                  onClick={() => handleSendMessageClose()}
                  type="file"
                ></i>
              </div>
              <h4 style={{ float: "left", padding: "1rem 1rem" }}>
                Send Message
              </h4>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <InputSendMassageBox placeholder="Sophia"></InputSendMassageBox>
                <InputSendMassageBox
                  placeholder="Send Message"
                  style={{ padding: "2rem 1rem" }}
                ></InputSendMassageBox>
              </div>
              <div>
                <lable>
                  <i class="icofont-image" onClick={(e) => onClickItem(e)}></i>
                </lable>
              </div>
              <ButtonSubMitMessage type="submit">Send </ButtonSubMitMessage>
            </form>
          </SendMessageBox>
        </ProfileControllSendMessageClick>
      )}
      <Container style={{ width: "75%" }}>
        <ImgProfile>
          <Author>
            <AuthorImage></AuthorImage>
            <NameProfile>
              <strong>
                <p style={{ fontSize: "1rem" }}> Jack Carter</p>
              </strong>
              <p style={{ fontSize: "0.8rem" }}>Ontario, CA</p>
            </NameProfile>
          </Author>
          <ProfileControl>
            <ProfileControlLi>
              <ProfileControla1>
                <i class="icofont-ui-add "></i>
                <ProfileControlHover className="hoverProfileControll">
                  Add Friend
                </ProfileControlHover>
                {/* <div>Add Friend</div> */}
              </ProfileControla1>
            </ProfileControlLi>
            <ProfileControlLi>
              <ProfileControla2>
                <i class="icofont-star "></i>
                <ProfileControlHover className="hoverProfileControll">
                  Follow
                </ProfileControlHover>
              </ProfileControla2>
              {/* <div>Follow</div> */}
            </ProfileControlLi>
            <ProfileControlLi onClick={() => handleSendMessageOpen()}>
              <ProfileControla3>
                <i class="icofont-ui-message "></i>
                <ProfileControlHover className="hoverProfileControll">
                  Send Message
                </ProfileControlHover>
              </ProfileControla3>
              {/* <div>Send Message</div> */}
            </ProfileControlLi>
            <ProfileControlLi>
              <ProfileControla4>
                <i class="icofont-settings "></i>
                <ProfileControlHovermenu0 className="hoverProfileControllmenu">
                  <ProfileControlHoverMenu>
                    <ProfileControlHoverMenuLi>
                      <ProfileControlHoverMenuA style={styleA} href="">
                        Update Profile Photo
                      </ProfileControlHoverMenuA>
                    </ProfileControlHoverMenuLi>
                    <ProfileControlHoverMenuLi>
                      <ProfileControlHoverMenuA style={styleA} href="">
                        Update Header Photo
                      </ProfileControlHoverMenuA>
                    </ProfileControlHoverMenuLi>
                    <ProfileControlHoverMenuLi>
                      <ProfileControlHoverMenuA style={styleA} href="">
                        Account Setting
                      </ProfileControlHoverMenuA>
                    </ProfileControlHoverMenuLi>
                    <ProfileControlHoverMenuLi>
                      <ProfileControlHoverMenuA style={styleA} href="">
                        Find Support
                      </ProfileControlHoverMenuA>
                    </ProfileControlHoverMenuLi>
                    <ProfileControlHoverMenuLi>
                      <ProfileControlHoverMenuA style={styleA} href="">
                        Report Profile
                      </ProfileControlHoverMenuA>
                    </ProfileControlHoverMenuLi>
                    <ProfileControlHoverMenuLi>
                      <ProfileControlHoverMenuA style={styleA} href="">
                        Block Profile
                      </ProfileControlHoverMenuA>
                    </ProfileControlHoverMenuLi>
                  </ProfileControlHoverMenu>
                </ProfileControlHovermenu0>
              </ProfileControla4>
            </ProfileControlLi>
          </ProfileControl>
        </ImgProfile>
        <NavBarProfile>
          <div style={{ flex: "0.7" }}></div>
          <div style={{ flex: "2" }}>
            <ul
              style={{
                display: "flex",
                listStyleType: "none",
                justifyContent: "space-between",
                alignItems: "bottom",
                color: "white",
              }}
            >
              <li>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#515365",
                    fontSize: " 14px",
                    fontWeight: " 500",
                  }}
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#515365",
                    fontSize: " 14px",
                    fontWeight: " 500",
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                onClick={(e)=>ClickMenuNavBar(e)}
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#515365",
                    fontSize: " 14px",
                    fontWeight: " 500",
                  }}
                >
                  Friends
                
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#515365",
                    fontSize: " 14px",
                    fontWeight: " 500",
                  }}
                >
                  Photos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#515365",
                    fontSize: " 14px",
                    fontWeight: " 500",
                  }}
                >
                  Videos
                </a>
              </li>
              <li style={{ fontSize: "1rem", position: "relative" }}>
                <i
                  class="icofont-circled-down"
                  onMouseEnter={NavbarHoverSettingEnter}
                  style={{
                    fontSize: "1.5rem",
                    color: "gray",
                  }}
                ></i>
                {navBarSetting && (
                  <NavBarProfileHoverMenu
                    onMouseLeave={NavbarHoverSettingEnterLeave}
                  >
                    <ul
                      style={{
                        listStyleType: "none",
                        fontSize: "1rem",
                        minWidth: "1rem",
                        lineHeight: "30px",
                        padding: "0 0",
                      }}
                    >
                      <li className="navbarHovermenuli1">
                        <a style={{ textDecoration: "none", padding: "0 7px" }}>
                          Profile Groups
                        </a>
                      </li>
                      <li className="navbarHovermenuli2">
                        <a style={{ textDecoration: "none", padding: "0 7px" }}>
                          Profile Anlytics
                        </a>
                      </li>
                    </ul>
                  </NavBarProfileHoverMenu>
                )}
              </li>
            </ul>
          </div>
          <div style={{ flex: "0.5" }}></div>
          <div style={{ flex: "1.2" }}>
            <ul
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "space-between",
                listStyleType: "none",
                margin: "0 0",
                alignItems: "center",
              }}
            >
              <li style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <strong>Posts </strong>
                </div>
                <div style={{ color: "#fa6342" }}>12</div>
              </li>
              <li style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <strong>Follewers</strong>
                </div>
                <div style={{ color: "#fa6342" }}>1.3k</div>
              </li>
              <li>
                <div>
                  <strong>Following</strong>
                </div>
                <div style={{ color: "#fa6342" }}>22</div>
              </li>
            </ul>
          </div>
          <div style={{ flex: "0.09" }}></div>
        </NavBarProfile>
        <ContainerInfo>
          <div style={{ display: "flex", marginTop: "2rem" }}>
            <PersonalInfo>
              <h7>
                <strong>Personal Info</strong>
                <div
                  style={{
                    borderBottom: "0.1px black solid",
                    marginTop: "1rem",
                    paddingRight: "5px",
                    maxWidth: "15rem",
                  }}
                ></div>
              </h7>
              <LabelInfor>
                <i class="icofont-people" style={{ color: "#fa6342" }}></i>
                <p style={{ paddingTop: "10px", marginLeft: "8px" }}>
                  About me
                </p>
              </LabelInfor>
              <p
                style={{
                  color: "gray",
                  fontSize: "0.8rem",
                  paddingLeft: "2rem",
                }}
              >
                Hi, I’m John Carter, I’m 36 and I work as a Digital Designer for
                the “dewwater” Agency in Ontario, Canada
              </p>
              <LabelInfor>
                <i
                  class="icofont-birthday-cake"
                  style={{ color: "#fa6342" }}
                ></i>
                <p style={{ paddingTop: "10px", marginLeft: "8px" }}>
                  Birthday
                </p>
              </LabelInfor>
              <p
                style={{
                  color: "gray",
                  fontSize: "0.8rem",
                  paddingLeft: "2rem",
                }}
              >
                11/06/2002
              </p>

              <LabelInfor>
                <i class="icofont-phone" style={{ color: "#fa6342" }}></i>
                <p style={{ paddingTop: "10px", marginLeft: "8px" }}>
                  0123456789
                </p>
              </LabelInfor>
              <p
                style={{
                  color: "gray",
                  fontSize: "0.8rem",
                  paddingLeft: "2rem",
                }}
              >
                11/06/2002
              </p>

              <LabelInfor>
                <i
                  class="icofont-ui-user-group"
                  style={{ color: "#fa6342" }}
                ></i>
                <p style={{ paddingTop: "10px", marginLeft: "8px" }}>
                  About me
                </p>
              </LabelInfor>
              <p
                style={{
                  color: "gray",
                  fontSize: "0.8rem",
                  paddingLeft: "2rem",
                }}
              >
                B+
              </p>

              <LabelInfor>
                <i class="icofont-people" style={{ color: "#fa6342" }}></i>
                <p style={{ paddingTop: "10px", marginLeft: "8px" }}>Male</p>
              </LabelInfor>
              <p
                style={{
                  color: "gray",
                  fontSize: "0.8rem",
                  paddingLeft: "2rem",
                }}
              >
                11/06/2002
              </p>

              <LabelInfor>
                <i class="icofont-world" style={{ color: "#fa6342" }}></i>
                <p style={{ paddingTop: "10px", marginLeft: "8px" }}>Country</p>
              </LabelInfor>
              <p
                style={{
                  color: "gray",
                  fontSize: "0.8rem",
                  paddingLeft: "2rem",
                }}
              >
                Viet Nam
              </p>

              <LabelInfor>
                <i class="icofont-worker" style={{ color: "#fa6342" }}></i>
                <p style={{ paddingTop: "10px", marginLeft: "8px" }}>
                  Occupation
                </p>
              </LabelInfor>
              <p
                style={{
                  color: "gray",
                  fontSize: "0.8rem",
                  paddingLeft: "2rem",
                }}
              >
                Student
              </p>

              <LabelInfor>
                <i
                  class="icofont-holding-hands"
                  style={{ color: "#fa6342" }}
                ></i>
                <p style={{ paddingTop: "10px", marginLeft: "8px" }}>Join</p>
              </LabelInfor>
              <p
                style={{
                  color: "gray",
                  fontSize: "0.8rem",
                  paddingLeft: "2rem",
                }}
              >
                11/06/2002
              </p>
              <LabelInfor>
                <i class="icofont-email" style={{ color: "#fa6342" }}></i>
                <p style={{ paddingTop: "10px", marginLeft: "8px" }}>Email</p>
              </LabelInfor>
              <p
                style={{
                  color: "gray",
                  fontSize: "0.8rem",
                  paddingLeft: "2rem",
                }}
              >
                quykaba@gmail.com
              </p>
            </PersonalInfo>

            <ContainerInfoRight>
              <GeneralInfor>
                <h7>
                  <strong>General Info</strong>
                  <div
                    style={{
                      borderBottom: "0.1px black solid",
                      marginTop: "1rem",
                      paddingRight: "5px",
                      maxWidth: "40rem",
                    }}
                  ></div>
                </h7>
                <GeneralInforChild>
                  <div style={{ flex: "1", marginRight: "2rem" }}>
                    <div>
                      <LabelInfor>
                        <i
                          class="icofont-love"
                          style={{ color: "#fa6342" }}
                        ></i>
                        <p style={{ paddingTop: "10px", marginLeft: "8px" }}>
                          Hobbies
                        </p>
                      </LabelInfor>
                      <p
                        style={{
                          color: "gray",
                          fontSize: "0.8rem",
                        }}
                      >
                        I like to ride the bicycle, swimming, and working out. I
                        also like reading design magazines, and searching on
                        internet, and also binge watching a good hollywood
                        Movies while it’s raining outside.F
                      </p>
                    </div>
                    <div>
                      <LabelInfor>
                        <i
                          class="icofont-ui-add"
                          style={{ color: "#fa6342" }}
                        ></i>
                        <p style={{ paddingTop: "10px", marginLeft: "8px" }}>
                          Others Interests
                        </p>
                      </LabelInfor>
                      <p
                        style={{
                          color: "gray",
                          fontSize: "0.8rem",
                        }}
                      >
                        Swimming, Surfing, Uber Diving, Anime, Photography,
                        Tattoos, Street Art.
                      </p>
                    </div>
                    <div>
                      <LabelInfor>
                        <i
                          class="icofont-link-alt"
                          style={{ color: "#fa6342" }}
                        ></i>
                        <p style={{ paddingTop: "10px", marginLeft: "8px" }}>
                          Social Networks
                        </p>
                      </LabelInfor>
                      <p
                        style={{
                          color: "gray",
                          fontSize: "1.7rem",
                        }}
                      >
                        <i
                          class="icofont-facebook"
                          style={{ marginRight: "8px" }}
                        ></i>
                        <i
                          class="icofont-twitter"
                          style={{ marginRight: "8px" }}
                        ></i>
                        <i
                          class="icofont-google-plus"
                          style={{ marginRight: "8px" }}
                        ></i>
                        <i
                          class="icofont-instagram"
                          style={{ marginRight: "8px" }}
                        ></i>
                        <i class="icofont-linkedin"></i>
                      </p>
                    </div>
                  </div>
                  <div style={{ flex: "1" }}>
                    <div style={{ flex: "1" }}>
                      <div style={{ marginBottom: "1.6rem" }}>
                        <LabelInfor>
                          <i
                            class="icofont-hat-alt"
                            style={{ color: "#fa6342" }}
                          ></i>
                          <p style={{ paddingTop: "10px", marginLeft: "8px" }}>
                            Education
                          </p>
                        </LabelInfor>
                        <p
                          style={{
                            color: "gray",
                            fontSize: "0.8rem",
                          }}
                        >
                          Master of computer science, sixteen years degree From
                          Oxford Uniersity, London
                        </p>
                      </div>
                      <div style={{ marginBottom: "3rem" }}>
                        <LabelInfor>
                          <i
                            class="icofont-star-alt-2"
                            style={{ color: "#fa6342" }}
                          ></i>
                          <p style={{ paddingTop: "10px", marginLeft: "8px" }}>
                            Works
                          </p>
                        </LabelInfor>
                        <p
                          style={{
                            color: "gray",
                            fontSize: "0.8rem",
                          }}
                        >
                          Currently working in the "color hands" web development
                          agency from the last 5 five years as Senior UI/UX
                          Designer
                        </p>
                      </div>
                      <div>
                        <LabelInfor>
                          <i
                            class="icofont-trophy"
                            style={{ color: "#fa6342" }}
                          ></i>
                          <p style={{ paddingTop: "10px", marginLeft: "8px" }}>
                            Badges
                          </p>
                        </LabelInfor>
                        <p
                          style={{
                            color: "gray",
                            fontSize: "1.7rem",
                          }}
                        >
                          <i
                            class="icofont-facebook"
                            style={{ marginRight: "8px" }}
                          ></i>
                          <i
                            class="icofont-twitter"
                            style={{ marginRight: "8px" }}
                          ></i>
                          <i
                            class="icofont-google-plus"
                            style={{ marginRight: "8px" }}
                          ></i>
                          <i
                            class="icofont-instagram"
                            style={{ marginRight: "8px" }}
                          ></i>
                          <i class="icofont-linkedin"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </GeneralInforChild>
              </GeneralInfor>

              <FavouritMovies>
                <p style={{ paddingTop: "10px", marginLeft: "8px" }}>
                  Favourit Movies & TV Shows (33)
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ flex: "1" }}>
                    <img
                      src={imageMovie}
                      style={{ width: "90%", overflow: "hidden" }}
                    ></img>
                    <p>Attaturk Tv Series 2017</p>
                  </div>
                  <div style={{ flex: "1" }}>
                    <img
                      src={imageMovie}
                      style={{ width: "90%", overflow: "hidden" }}
                    ></img>
                    <p>Attaturk Tv Series 2017</p>
                  </div>
                  <div style={{ flex: "1" }}>
                    <img
                      src={imageMovie}
                      style={{ width: "90%", overflow: "hidden" }}
                    ></img>
                    <p>Attaturk Tv Series 2017</p>
                  </div>
                </div>
              </FavouritMovies>
              <FriendList>
                <p style={{ paddingTop: "10px", marginLeft: "8px" }}>
                  Friend's (320)
                </p>
                <div>
                  <Slider
                    {...setting_Slide}
                    style={{ padding: "0 0", margin: "0 0", width: "100%" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={imageFriend}
                        style={{
                          width: "130.2px",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                      ></img>
                      <strong>
                        <p style={{ fontSize: "1rem", margin: "0 0" }}>
                          Emama John
                        </p>
                      </strong>
                      <p style={{ fontSize: "0.7rem", margin: "0 0" }}>
                        1 mutal friends
                      </p>
                      <div>
                        <a
                          style={{
                            fontSize: "1.2rem",
                            marginRight: "10px",
                            cursor: "pointer",
                          }}
                        >
                          <i
                            class="icofont-facebook-messenger"
                            onClick={() => handleSendMessageOpen()}
                          ></i>
                        </a>
                        <a style={{ fontSize: "1.2rem", cursor: "pointer" }}>
                          <i class="icofont-expressionless"></i>
                        </a>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={imageFriend}
                        style={{
                          width: "130.2px",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                      ></img>
                      <strong>
                        <p style={{ fontSize: "1rem", margin: "0 0" }}>
                          Emama John
                        </p>
                      </strong>
                      <p style={{ fontSize: "0.7rem", margin: "0 0" }}>
                        1 mutal friends
                      </p>
                      <div>
                        <a
                          style={{
                            fontSize: "1.2rem",
                            marginRight: "10px",
                            cursor: "pointer",
                          }}
                        >
                          <i
                            class="icofont-facebook-messenger"
                            onClick={() => handleSendMessageOpen()}
                          ></i>
                        </a>
                        <a style={{ fontSize: "1.2rem", cursor: "pointer" }}>
                          <i class="icofont-expressionless"></i>
                        </a>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={imageFriend}
                        style={{
                          width: "130.2px",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                      ></img>
                      <strong>
                        <p style={{ fontSize: "1rem", margin: "0 0" }}>
                          Emama John
                        </p>
                      </strong>
                      <p style={{ fontSize: "0.7rem", margin: "0 0" }}>
                        1 mutal friends
                      </p>
                      <div>
                        <a
                          style={{
                            fontSize: "1.2rem",
                            marginRight: "10px",
                            cursor: "pointer",
                          }}
                        >
                          <i
                            class="icofont-facebook-messenger"
                            onClick={() => handleSendMessageOpen()}
                          ></i>
                        </a>
                        <a style={{ fontSize: "1.2rem", cursor: "pointer" }}>
                          <i class="icofont-expressionless"></i>
                        </a>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={imageFriend}
                        style={{
                          width: "130.2px",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                      ></img>
                      <strong>
                        <p style={{ fontSize: "1rem", margin: "0 0" }}>
                          Emama John
                        </p>
                      </strong>
                      <p style={{ fontSize: "0.7rem", margin: "0 0" }}>
                        1 mutal friends
                      </p>
                      <div>
                        <a
                          style={{
                            fontSize: "1.2rem",
                            marginRight: "10px",
                            cursor: "pointer",
                          }}
                        >
                          <i
                            class="icofont-facebook-messenger"
                            onClick={() => handleSendMessageOpen()}
                          ></i>
                        </a>
                        <a style={{ fontSize: "1.2rem", cursor: "pointer" }}>
                          <i class="icofont-expressionless"></i>
                        </a>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={imageFriend}
                        style={{
                          width: "130.2px",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                      ></img>
                      <strong>
                        <p style={{ fontSize: "1rem", margin: "0 0" }}>
                          Emama John
                        </p>
                      </strong>
                      <p style={{ fontSize: "0.7rem", margin: "0 0" }}>
                        1 mutal friends
                      </p>
                      <div>
                        <a
                          style={{
                            fontSize: "1.2rem",
                            marginRight: "10px",
                            cursor: "pointer",
                          }}
                        >
                          <i
                            class="icofont-facebook-messenger"
                            onClick={() => handleSendMessageOpen()}
                          ></i>
                        </a>
                        <a style={{ fontSize: "1.2rem", cursor: "pointer" }}>
                          <i class="icofont-expressionless"></i>
                        </a>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={imageFriend}
                        style={{
                          width: "130.2px",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                      ></img>
                      <strong>
                        <p style={{ fontSize: "1rem", margin: "0 0" }}>
                          Emama John
                        </p>
                      </strong>
                      <p style={{ fontSize: "0.7rem", margin: "0 0" }}>
                        1 mutal friends
                      </p>
                      <div>
                        <a
                          style={{
                            fontSize: "1.2rem",
                            marginRight: "10px",
                            cursor: "pointer",
                          }}
                        >
                          <i
                            class="icofont-facebook-messenger"
                            onClick={() => handleSendMessageOpen()}
                          ></i>
                        </a>
                        <a style={{ fontSize: "1.2rem", cursor: "pointer" }}>
                          <i class="icofont-expressionless"></i>
                        </a>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={imageFriend}
                        style={{
                          width: "130.2px",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                      ></img>
                      <strong>
                        <p style={{ fontSize: "1rem", margin: "0 0" }}>
                          Emama John
                        </p>
                      </strong>
                      <p style={{ fontSize: "0.7rem", margin: "0 0" }}>
                        1 mutal friends
                      </p>
                      <div>
                        <a
                          style={{
                            fontSize: "1.2rem",
                            marginRight: "10px",
                            cursor: "pointer",
                          }}
                        >
                          <i
                            class="icofont-facebook-messenger"
                            onClick={() => handleSendMessageOpen()}
                          ></i>
                        </a>
                        <a style={{ fontSize: "1.2rem", cursor: "pointer" }}>
                          <i class="icofont-expressionless"></i>
                        </a>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={imageFriend}
                        style={{
                          width: "130.2px",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                      ></img>
                      <strong>
                        <p style={{ fontSize: "1rem", margin: "0 0" }}>
                          Emama John
                        </p>
                      </strong>
                      <p style={{ fontSize: "0.7rem", margin: "0 0" }}>
                        1 mutal friends
                      </p>
                      <div>
                        <a
                          style={{
                            fontSize: "1.2rem",
                            marginRight: "10px",
                            cursor: "pointer",
                          }}
                        >
                          <i
                            class="icofont-facebook-messenger"
                            onClick={() => handleSendMessageOpen()}
                          ></i>
                        </a>
                        <a style={{ fontSize: "1.2rem", cursor: "pointer" }}>
                          <i class="icofont-expressionless"></i>
                        </a>
                      </div>
                    </div>
                  </Slider>
                </div>
              </FriendList>
              <PhotoList>
                <p style={{ paddingTop: "10px", marginLeft: "8px" }}>
                  Photos (580)
                </p>
                <div>
                  <Slider
                    {...setting_Slide}
                    style={{ padding: "0 0", margin: "0 0", width: "100%" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <PhotoListScaleUp
                        src={imageFriend}
                        style={{
                          width: "130.2px",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                        onClick={(e) => ScaleUpImagefc(e)}
                      ></PhotoListScaleUp>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <PhotoListScaleUp
                        src={imageFriend}
                        style={{
                          width: "130.2px",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                        onClick={(e) => ScaleUpImagefc(e)}
                      ></PhotoListScaleUp>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <PhotoListScaleUp
                        src={imageFriend}
                        style={{
                          width: "130.2px",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                        onClick={(e) => ScaleUpImagefc(e)}
                      ></PhotoListScaleUp>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <PhotoListScaleUp
                        src={imageFriend}
                        style={{
                          width: "130.2px",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                        onClick={(e) => ScaleUpImagefc(e)}
                      ></PhotoListScaleUp>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <PhotoListScaleUp
                        src={imageFriend}
                        style={{
                          width: "130.2px",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                        onClick={(e) => ScaleUpImagefc(e)}
                      ></PhotoListScaleUp>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <PhotoListScaleUp
                        src={imageFriend}
                        style={{
                          width: "130.2px",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                        onClick={(e) => ScaleUpImagefc(e)}
                      ></PhotoListScaleUp>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <PhotoListScaleUp
                        src={imageFriend}
                        style={{
                          width: "130.2px",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                        onClick={(e) => ScaleUpImagefc(e)}
                      ></PhotoListScaleUp>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <PhotoListScaleUp
                        src={imageFriend}
                        style={{
                          width: "130.2px",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                        onClick={(e) => ScaleUpImagefc(e)}
                      ></PhotoListScaleUp>
                    </div>
                  </Slider>
                </div>
              </PhotoList>
            </ContainerInfoRight>
          </div>
        </ContainerInfo>
        {displayScaleUp && (
          <DivScaleImage>
            <ScaleUpImage src={scaleUpImage}></ScaleUpImage>
            <ScaleUpExit>
              <i
                class="icofont-brand-nexus"
                onClick={() => handleScaleImageUp()}
                style={{ fontSize: "2rem", color: "white" }}
              ></i>
            </ScaleUpExit>
          </DivScaleImage>
        )}
      </Container>
    </div>
  );
};
export default ImagePersonal;
