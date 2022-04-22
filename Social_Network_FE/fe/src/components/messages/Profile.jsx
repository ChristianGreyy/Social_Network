import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  height: 100%;
`;

const Heading = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const Name = styled.h6`
  margin-top: 12px;
  color: #fa6342;
  margin-bottom: 4px;
  font-size: 1rem;
`;

const Status = styled.div`
  font-size: 12px;
  color: #757a95;
`;

const Information = styled.ul`
  padding: 0;
  margin: 0;
  list-styled: none;
`;

const ItemInformation = styled.li`
  display: flex;
  align-items: center;
`;

const ItemDes = styled.div`
  color: #535165;
  font-weight: 500;
`;

const ItemContent = styled.div`
  color: #959ab5;
  font-size: 13px;
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <Heading>
        <Avatar src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/277904683_355457749973025_4136143877988181490_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Vmtp-VcWZ28AX_cyMPm&_nc_ht=scontent.fhan5-10.fna&oh=03_AVL-RpyHECaJBWzW1nErsXSu7W2QHT3dwjX-DIczWRyYjg&oe=627DD276"></Avatar>
        <Name>ChrisitanGrey</Name>
        <Status>Online</Status>
        <Information>
          <ItemInformation></ItemInformation>
        </Information>
      </Heading>
    </ProfileContainer>
  );
};

export default Profile;
