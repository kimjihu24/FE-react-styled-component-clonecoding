import React from "react";
import styled from "styled-components";

//배너 전체 컨테이너
const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 460px;
  width: 100%;
  color: #212529;
  background-color: #ffffff;
`;

//큰 글자
const Bannertitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  margin-bottom: 15px;
`;

//작은 글자
const Bannertext = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  color:#6C757D;
`;

//버튼 두개 컨테이너
const ButtonContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
`;

//파란 버튼
const Bluebutton = styled.button`
  width: 155px;
  height: 37px;
  display:inline-block;
  font-size: 15px;
  text-align: center;
  background-color: #007bff;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  cursor: pointer;  
`;

//회색 버튼
const Greybutton = styled.button`
  width: 155px;
  height: 37px;
  display:inline-block;
  font-size: 15px;
  text-align: center;
  background-color: #6C757D;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  cursor: pointer;  
`;

const Banner = () => {
    return (
    <BannerContainer>
        <Bannertitle>Album example</Bannertitle>
        <Bannertext>
        Something short and leading about the collection below—its contents,
        <br />the creator, etc. Make it short and sweet, but not too short so folks don’t
        <br />simply skip over it entirely.  
        <br />&nbsp;
        </Bannertext>
        <ButtonContainer>
            <Bluebutton>Main call to action</Bluebutton>
            <Greybutton>Secondary action</Greybutton>
        </ButtonContainer>
    </BannerContainer>  
    );
  };
  
  export default Banner;