import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled, { keyframes } from "styled-components";
import HeaderIntroduce from "../images/header__introduce.png";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../redux/reducer/authSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { unwrapResult } from "@reduxjs/toolkit";

const Introduce = styled.div`
  margin-top: 66px;
  height: 261px;
  width: 100%;
  background: #495b72;
  border-bottom: 1px solid #e1e8ed;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

const IntroduceTitle = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: 500;
  margin-top: 48px;
`;

const IntroduceDes = styled.div`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: white;
  margin-top: 4px;
`;

const IntroduceImage = styled.img`
  width: 74%;
  position: absolute;
  bottom: 0;
`;

const LoginArea = styled.div`
  padding-top: 50px;
  background-color: #edf2f6;
`;

const LoginAreaLeft = styled.div`
  border-right: 1px solid #47586d;
  padding: 0 75px 0 180px;
  height: 362px;
`;

const LoginAreaLeftTitle = styled.h6`
  color: #535165;
  text-align: left;
  font-size: 1.5rem;
  line-height: 32px;
`;

const LoginAreaLeftDes = styled.h6`
  text-align: left;
  color: #959ab5;
  font-size: 13px;
  line-height: 24px;
`;

const LoginAreaLeftList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 40px;
  justify-content: space-between;
`;

const LoginAreaLeftItemRecent = styled.li`
  cursor: pointer;
  position: relative;
`;

const LoginAreaLeftItemAdd = styled.li`
  width: 105px;
  height: 140px;
  background-color: white;
  border: 1px solid dotted;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const LoginAreaLeftItemAddIcon = styled.div`
  font-size: 30px;
  color: #fa6342;
`;

const LoginAreaLeftItemAddText = styled.div`
  color: #757a95;
  font-size: 14px;
  margin-top: 4px;
`;

const LoginAreaLeftItemAvatar = styled.div`
  height: 105px;
  width: 105px;
  border-radius: 50%;
  background-color: white;
`;

const LoginAreaLeftItemImage = styled.img`
  width: 94%;
  height: 94%;
  border-radius: 50%;
`;

const LoginAreaLeftItemName = styled.div`
  color: #535165;
  margin-top: 5px;
`;

const LoginAreaLeftItemClose = styled.div`
  position: absolute;
  top: -8px;
  left: -8px;
  cursor: pointer;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: white;
`;

const LoginAreaRight = styled.div`
  height: 362px;
  padding: 0 180px 0 75px;
`;

const LoginAreaRightTitle = styled.div`
  display: flex;
  align-items: center;
`;

const LoginAreaRightTitleIcon = styled.div`
  font-size: 18px;
`;

const LoginAreaRightTitleText = styled.h6`
  color: #535165;
  margin-left: 6px;
  font-weight: 500;
  text-align: left;
  font-size: 1.5rem;
  line-height: 32px;
`;

const LoginAreaRightDes = styled.h6`
  text-align: left;
  color: #959ab5;
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 30px;
`;

const Form = styled.form``;

const FormGroup = styled.div`
  margin-bottom: 18px;
  display: flex;
`;

const Input = styled.input`
  width: 100%;
  height: 44px;
  border-radius: 35px;
  outline: none;
  font-size: 15px;
  border: none;
  padding-left: 16px;
`;

const Button = styled.input`
  width: 92px;
  height: 40px;
  background-color: #fa6342;
  outline: none;
  border: none;
  color: white;
  border-radius: 30px;
`;

const Register = styled.div`
  color: #fa6342;
  text-align: left;
  cursor: pointer;
  font-size: 15px;
`;

const RegisterDes = styled.div`
  text-align: left;
  color: #959ab5;
  font-size: 12px;
  margin-top: 12px;
`;

const RegisterPolicy = styled.span`
  color: #fa6342;
`;

const ListPeple = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 99%;
`;

const ItemPeple = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 80px;
`;

const ItemPeopleIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: Center;
  background-color: #fa6342;
  width: 75px;
  color: white;
  height: 75px;
  font-size: 24px;
  border-radius: 50%;
`;

const ItemPeopleDes = styled.div`
  color: #757a95;
  font-size: 14px;
  letter-spacing: 0.2px;
  margin: 6px 0;
`;

const ItemPeopleNumber = styled.div`
  color: #34465d;
  font-size: 16px;
  font-style: normal;
`;

const Login = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = async () => {
    // setLogin(!login);
    try {
      const resultAction = await dispatch(loginApi({ email, password }));
      if (resultAction.error) {
        alert("sai mat khau roi boy");
      }
      const originalPromiseResult = unwrapResult(resultAction);
      if (originalPromiseResult.status == "success") {
        localStorage.setItem("token", originalPromiseResult.token);
        window.location.href = "/";
      } else {
        console.log("iam here");
        // alert("please authenticaton");
      }
      console.log(originalPromiseResult);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Header status="yes" title="LOGIN" />
      <Introduce>
        <IntroduceTitle>Now You Are Out Of Pitnik</IntroduceTitle>
        <IntroduceDes>
          Discover what's happining right now in the world.
        </IntroduceDes>
        <IntroduceImage src={HeaderIntroduce}></IntroduceImage>
      </Introduce>
      <LoginArea
        className="container-  "
        style={{ width: "100%", overflow: "hidden" }}
      >
        <div className="row">
          <LoginAreaLeft className="col-6">
            <LoginAreaLeftTitle>Recent Login</LoginAreaLeftTitle>
            <LoginAreaLeftDes>
              Next Time you login click your picture. To remove an account from
              this page click cross.
            </LoginAreaLeftDes>
            <LoginAreaLeftList>
              <LoginAreaLeftItemRecent>
                <LoginAreaLeftItemAvatar>
                  <LoginAreaLeftItemImage src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/277904683_355457749973025_4136143877988181490_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Vmtp-VcWZ28AX_cyMPm&_nc_ht=scontent.fhan5-10.fna&oh=03_AVL-RpyHECaJBWzW1nErsXSu7W2QHT3dwjX-DIczWRyYjg&oe=627DD276"></LoginAreaLeftItemImage>
                </LoginAreaLeftItemAvatar>
                <LoginAreaLeftItemName>ChristianGrey</LoginAreaLeftItemName>
                <LoginAreaLeftItemClose>
                  <i className="icofont-close-line"></i>
                </LoginAreaLeftItemClose>
              </LoginAreaLeftItemRecent>
              <LoginAreaLeftItemRecent>
                <LoginAreaLeftItemAvatar>
                  <LoginAreaLeftItemImage src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/277904683_355457749973025_4136143877988181490_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Vmtp-VcWZ28AX_cyMPm&_nc_ht=scontent.fhan5-10.fna&oh=03_AVL-RpyHECaJBWzW1nErsXSu7W2QHT3dwjX-DIczWRyYjg&oe=627DD276"></LoginAreaLeftItemImage>
                </LoginAreaLeftItemAvatar>
                <LoginAreaLeftItemName>QuyMan</LoginAreaLeftItemName>
                <LoginAreaLeftItemClose>
                  <i className="icofont-close-line"></i>
                </LoginAreaLeftItemClose>
              </LoginAreaLeftItemRecent>
              <LoginAreaLeftItemAdd>
                <LoginAreaLeftItemAddIcon>
                  <i className="icofont-plus"></i>
                </LoginAreaLeftItemAddIcon>
                <LoginAreaLeftItemAddText>Add Account</LoginAreaLeftItemAddText>
              </LoginAreaLeftItemAdd>
            </LoginAreaLeftList>
          </LoginAreaLeft>
          <LoginAreaRight className="col-6">
            <LoginAreaRightTitle>
              <LoginAreaRightTitleIcon>
                <i className="icofont-key"></i>
              </LoginAreaRightTitleIcon>
              <LoginAreaRightTitleText>Login</LoginAreaRightTitleText>
            </LoginAreaRightTitle>
            <LoginAreaRightDes>
              Login again, you have recently signout from here
            </LoginAreaRightDes>
            <FormGroup>
              <Input
                // name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Button
                type="submit"
                value="Login"
                onClick={HandleSubmit}
              ></Button>
            </FormGroup>
            <Register> Create New Signup</Register>
            <RegisterDes>
              By clicking Sign Up, you agree to our{" "}
              <Link to="/" style={{ textDecoration: "none" }}>
                <RegisterPolicy>Terms & Policy.</RegisterPolicy>
              </Link>
              You may receive SMS notifications from us and can opt out at any
              time.
            </RegisterDes>
          </LoginAreaRight>
        </div>
      </LoginArea>
      <ListPeple>
        <ItemPeple>
          <ItemPeopleIcon>
            <i className="icofont-tick-mark"></i>
          </ItemPeopleIcon>
          <ItemPeopleDes>Registerd Users</ItemPeopleDes>
          <ItemPeopleNumber>1,01,242</ItemPeopleNumber>
        </ItemPeple>
        <ItemPeple>
          <ItemPeopleIcon>
            <i className="icofont-image"></i>
          </ItemPeopleIcon>
          <ItemPeopleDes>Posts Published</ItemPeopleDes>
          <ItemPeopleNumber>21,01,242</ItemPeopleNumber>
        </ItemPeple>
        <ItemPeple>
          <ItemPeopleIcon>
            <i className="icofont-users-alt-3"></i>
          </ItemPeopleIcon>
          <ItemPeopleDes>People Online</ItemPeopleDes>
          <ItemPeopleNumber>41,242</ItemPeopleNumber>
        </ItemPeple>
      </ListPeple>
    </div>
  );
};

export default Login;
