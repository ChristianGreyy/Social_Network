import React from "react";
import styled, { keyframes } from "styled-components";

const MessngerContainer = styled.div`
  height: 100%;
`;

const HeadingMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleHeadingMessage = styled.h6`
  color: #535165;
  line-height: 20px;
  font-size: 18px;
  padding: 10px 0;
`;

const IconHeadingMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

const Search = styled.div`
  display: flex;
  height: 35px;
  align-items: center;
  background: #edf2f6;
  border-radius: 5px;
`;

const InputSearch = styled.input`
  width: 90%;
  height: 100%;
  background: #edf2f6;
  border: none;
  outline: none;
  padding-left: 10px;
`;

const IconSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
`;

const ListMessenger = styled.ul`
  list-style: none;
  padding: 0;
  height: calc(86vh - 73px);
  overflow-y: scroll;
  margin-top: 20px;
`;

const ItemMessenger = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  position: relative;

  &:hover {
    background-color: #f2f2f2;
    cursor: pointer;
  }
`;

const Avatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  position: relative;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const AvatarStatus = styled.div`
  background: #7fba00;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  bottom: 0;
`;
const AvatarItemMessenger = styled.img``;

const Desscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

const Name = styled.div`
  color: #535165;
  text-align: left;
`;

const BriefMessage = styled.div`
  font-size: 12px;
`;

const NowStatus = styled.div`
  background: #fa6342;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
  right: 12px;
  top: 50%:
  transform: translate(-50%, 0);
`;

const messenger = () => {
  return (
    <MessngerContainer>
      <HeadingMessage>
        <TitleHeadingMessage>Chat Messages</TitleHeadingMessage>
        <IconHeadingMessage>
          <i class="icofont-ui-settings"></i>
        </IconHeadingMessage>
      </HeadingMessage>
      <Search>
        <InputSearch placeholder="Search Friend..."></InputSearch>
        <IconSearch>
          <i class="icofont-search"></i>
        </IconSearch>
      </Search>
      <ListMessenger>
        <ItemMessenger>
          <Avatar>
            <AvatarImage src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/277904683_355457749973025_4136143877988181490_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Vmtp-VcWZ28AX_cyMPm&_nc_ht=scontent.fhan5-10.fna&oh=03_AVL-RpyHECaJBWzW1nErsXSu7W2QHT3dwjX-DIczWRyYjg&oe=627DD276"></AvatarImage>
            <AvatarStatus></AvatarStatus>
          </Avatar>
          <Desscription>
            <Name>ChristianGrey</Name>
            <BriefMessage>Hi man, my name is Hung - 2hr ago</BriefMessage>
          </Desscription>
          <NowStatus></NowStatus>
        </ItemMessenger>
        <ItemMessenger>
          <Avatar>
            <AvatarImage src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/277904683_355457749973025_4136143877988181490_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Vmtp-VcWZ28AX_cyMPm&_nc_ht=scontent.fhan5-10.fna&oh=03_AVL-RpyHECaJBWzW1nErsXSu7W2QHT3dwjX-DIczWRyYjg&oe=627DD276"></AvatarImage>
            <AvatarStatus></AvatarStatus>
          </Avatar>
          <Desscription>
            <Name>ChristianGrey</Name>
            <BriefMessage>Hi man, my name is Hung - 2hr ago</BriefMessage>
          </Desscription>
        </ItemMessenger>
        <ItemMessenger>
          <Avatar>
            <AvatarImage src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/277904683_355457749973025_4136143877988181490_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Vmtp-VcWZ28AX_cyMPm&_nc_ht=scontent.fhan5-10.fna&oh=03_AVL-RpyHECaJBWzW1nErsXSu7W2QHT3dwjX-DIczWRyYjg&oe=627DD276"></AvatarImage>
            <AvatarStatus></AvatarStatus>
          </Avatar>
          <Desscription>
            <Name>ChristianGrey</Name>
            <BriefMessage>Hi man, my name is Hung - 2hr ago</BriefMessage>
          </Desscription>
        </ItemMessenger>
        <ItemMessenger>
          <Avatar>
            <AvatarImage src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/277904683_355457749973025_4136143877988181490_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Vmtp-VcWZ28AX_cyMPm&_nc_ht=scontent.fhan5-10.fna&oh=03_AVL-RpyHECaJBWzW1nErsXSu7W2QHT3dwjX-DIczWRyYjg&oe=627DD276"></AvatarImage>
            <AvatarStatus></AvatarStatus>
          </Avatar>
          <Desscription>
            <Name>ChristianGrey</Name>
            <BriefMessage>Hi man, my name is Hung - 2hr ago</BriefMessage>
          </Desscription>
        </ItemMessenger>
        <ItemMessenger>
          <Avatar>
            <AvatarImage src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/277904683_355457749973025_4136143877988181490_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Vmtp-VcWZ28AX_cyMPm&_nc_ht=scontent.fhan5-10.fna&oh=03_AVL-RpyHECaJBWzW1nErsXSu7W2QHT3dwjX-DIczWRyYjg&oe=627DD276"></AvatarImage>
            <AvatarStatus></AvatarStatus>
          </Avatar>
          <Desscription>
            <Name>ChristianGrey</Name>
            <BriefMessage>Hi man, my name is Hung - 2hr ago</BriefMessage>
          </Desscription>
        </ItemMessenger>
        <ItemMessenger>
          <Avatar>
            <AvatarImage src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/277904683_355457749973025_4136143877988181490_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Vmtp-VcWZ28AX_cyMPm&_nc_ht=scontent.fhan5-10.fna&oh=03_AVL-RpyHECaJBWzW1nErsXSu7W2QHT3dwjX-DIczWRyYjg&oe=627DD276"></AvatarImage>
            <AvatarStatus></AvatarStatus>
          </Avatar>
          <Desscription>
            <Name>ChristianGrey</Name>
            <BriefMessage>Hi man, my name is Hung - 2hr ago</BriefMessage>
          </Desscription>
        </ItemMessenger>
        <ItemMessenger>
          <Avatar>
            <AvatarImage src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/277904683_355457749973025_4136143877988181490_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Vmtp-VcWZ28AX_cyMPm&_nc_ht=scontent.fhan5-10.fna&oh=03_AVL-RpyHECaJBWzW1nErsXSu7W2QHT3dwjX-DIczWRyYjg&oe=627DD276"></AvatarImage>
            <AvatarStatus></AvatarStatus>
          </Avatar>
          <Desscription>
            <Name>ChristianGrey</Name>
            <BriefMessage>Hi man, my name is Hung - 2hr ago</BriefMessage>
          </Desscription>
        </ItemMessenger>
        <ItemMessenger>
          <Avatar>
            <AvatarImage src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/277904683_355457749973025_4136143877988181490_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Vmtp-VcWZ28AX_cyMPm&_nc_ht=scontent.fhan5-10.fna&oh=03_AVL-RpyHECaJBWzW1nErsXSu7W2QHT3dwjX-DIczWRyYjg&oe=627DD276"></AvatarImage>
            <AvatarStatus></AvatarStatus>
          </Avatar>
          <Desscription>
            <Name>ChristianGrey</Name>
            <BriefMessage>Hi man, my name is Hung - 2hr ago</BriefMessage>
          </Desscription>
        </ItemMessenger>
        <ItemMessenger>
          <Avatar>
            <AvatarImage src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/277904683_355457749973025_4136143877988181490_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Vmtp-VcWZ28AX_cyMPm&_nc_ht=scontent.fhan5-10.fna&oh=03_AVL-RpyHECaJBWzW1nErsXSu7W2QHT3dwjX-DIczWRyYjg&oe=627DD276"></AvatarImage>
            <AvatarStatus></AvatarStatus>
          </Avatar>
          <Desscription>
            <Name>ChristianGrey</Name>
            <BriefMessage>Hi man, my name is Hung - 2hr ago</BriefMessage>
          </Desscription>
        </ItemMessenger>
        <ItemMessenger>
          <Avatar>
            <AvatarImage src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/277904683_355457749973025_4136143877988181490_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Vmtp-VcWZ28AX_cyMPm&_nc_ht=scontent.fhan5-10.fna&oh=03_AVL-RpyHECaJBWzW1nErsXSu7W2QHT3dwjX-DIczWRyYjg&oe=627DD276"></AvatarImage>
            <AvatarStatus></AvatarStatus>
          </Avatar>
          <Desscription>
            <Name>ChristianGrey</Name>
            <BriefMessage>Hi man, my name is Hung - 2hr ago</BriefMessage>
          </Desscription>
        </ItemMessenger>
      </ListMessenger>
    </MessngerContainer>
  );
};

export default messenger;
