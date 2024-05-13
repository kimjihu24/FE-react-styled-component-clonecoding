import React from "react";
import styled from "styled-components";
import img from "../assets/sky.jpg";

//카드 전체 컨테이너
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  background-color: #F8F9FA;
  height: 2000px;
  width: 100%;
  height: auto;
  padding: 20px;
`;

//카드 리스트의 컨테이너
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width:80%;
  height:1500px;
  gap: 30px;
  align-items: center;
  padding-left: 150px;
`;

//개별 카드
const CardlistContainer = styled.div`
  width:340px;
  height:410px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color:white;
  box-shadow:0px 5px 10px -2px lightgrey;

`;

//이미지
const CardImage = styled.img`
  width:340px;
  height: 220px;
  border-radius: 5px 5px 0px 0px;
`;

//중간 글
const CardText = styled.div`
  text-align:center;
  padding-top: 20px;
  color:#212529;
`;

//버튼 두개의 컨테이너
const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  border: none;
  background-color: white;
  padding-top:50px;
  padding-left: 20px;
`;

//ViewButton
const ViewButton = styled.button`
  width: 50px;
  height: 30px;
  display:inline-block;
  font-size: 13px;
  text-align: center;
  background-color: #ffffff;
  color: #212529;
  border-radius: 5px 0px 0px 5px;
  border-style: none;
  box-shadow: 0px 0px 5px lightgrey;
  cursor: pointer;
  &:hover {
    background-color: #6C757D;
    color: #ffffff;
  }
`;

//EditButton
const EditButton = styled.button`
  width: 50px;
  height: 30px;
  display:inline-block;
  font-size: 13px;
  text-align: center;
  background-color: #ffffff;
  color: #212529;
  border-radius:0px 5px 5px 0px;
  border-style: none;
  box-shadow: 0px 0px 5px lightgrey;
  cursor: pointer;
  &:hover {
    background-color: #6C757D;
    color: #ffffff;
  }
`;

//시간 표시
const TimeText = styled.div`
  color:#212529;
  font-size:13px;
  padding-left: 150px;
  padding-top: 10px;
`;

const Card = () => {
    return (
    <CardContainer>
    <Wrap>
     <CardlistContainer>
     <CardImage src={img}></CardImage>
      <CardText>
      This is a wider card with supporting text
      <br/>below as a natural lead-in to additional
      <br/>content. This content is a little bit longer.
      </CardText>
      <ButtonContainer>
        <ViewButton>View</ViewButton><EditButton>Edit</EditButton>
        <TimeText>9 mins</TimeText>
      </ButtonContainer>
     </CardlistContainer>
     <CardlistContainer>
     <CardImage src={img}></CardImage>
      <CardText>
      This is a wider card with supporting text
      <br/>below as a natural lead-in to additional
      <br/>content. This content is a little bit longer.
      </CardText>
      <ButtonContainer>
        <ViewButton>View</ViewButton><EditButton>Edit</EditButton>
        <TimeText>9 mins</TimeText>
      </ButtonContainer>
     </CardlistContainer>
     <CardlistContainer>
     <CardImage src={img}></CardImage>
      <CardText>
      This is a wider card with supporting text
      <br/>below as a natural lead-in to additional
      <br/>content. This content is a little bit longer.
      </CardText>
      <ButtonContainer>
        <ViewButton>View</ViewButton><EditButton>Edit</EditButton>
        <TimeText>9 mins</TimeText>
      </ButtonContainer>
     </CardlistContainer>
     <CardlistContainer>
     <CardImage src={img}></CardImage>
      <CardText>
      This is a wider card with supporting text
      <br/>below as a natural lead-in to additional
      <br/>content. This content is a little bit longer.
      </CardText>
      <ButtonContainer>
        <ViewButton>View</ViewButton><EditButton>Edit</EditButton>
        <TimeText>9 mins</TimeText>
      </ButtonContainer>
     </CardlistContainer>
     <CardlistContainer>
     <CardImage src={img}></CardImage>
      <CardText>
      This is a wider card with supporting text
      <br/>below as a natural lead-in to additional
      <br/>content. This content is a little bit longer.
      </CardText>
      <ButtonContainer>
        <ViewButton>View</ViewButton><EditButton>Edit</EditButton>
        <TimeText>9 mins</TimeText>
      </ButtonContainer>
     </CardlistContainer>
     <CardlistContainer>
     <CardImage src={img}></CardImage>
      <CardText>
      This is a wider card with supporting text
      <br/>below as a natural lead-in to additional
      <br/>content. This content is a little bit longer.
      </CardText>
      <ButtonContainer>
        <ViewButton>View</ViewButton><EditButton>Edit</EditButton>
        <TimeText>9 mins</TimeText>
      </ButtonContainer>
     </CardlistContainer>
     <CardlistContainer>
     <CardImage src={img}></CardImage>
      <CardText>
      This is a wider card with supporting text
      <br/>below as a natural lead-in to additional
      <br/>content. This content is a little bit longer.
      </CardText>
      <ButtonContainer>
        <ViewButton>View</ViewButton><EditButton>Edit</EditButton>
        <TimeText>9 mins</TimeText>
      </ButtonContainer>
     </CardlistContainer>
     <CardlistContainer>
     <CardImage src={img}></CardImage>
      <CardText>
      This is a wider card with supporting text
      <br/>below as a natural lead-in to additional
      <br/>content. This content is a little bit longer.
      </CardText>
      <ButtonContainer>
        <ViewButton>View</ViewButton><EditButton>Edit</EditButton>
        <TimeText>9 mins</TimeText>
      </ButtonContainer>
     </CardlistContainer>
     <CardlistContainer>
     <CardImage src={img}></CardImage>
      <CardText>
      This is a wider card with supporting text
      <br/>below as a natural lead-in to additional
      <br/>content. This content is a little bit longer.
      </CardText>
      <ButtonContainer>
        <ViewButton>View</ViewButton><EditButton>Edit</EditButton>
        <TimeText>9 mins</TimeText>
      </ButtonContainer>
     </CardlistContainer>
     </Wrap>   
    </CardContainer>
    );
  };
  
  export default Card;