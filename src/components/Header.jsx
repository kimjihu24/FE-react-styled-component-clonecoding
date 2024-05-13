import React from "react";
import styled from "styled-components";

// 헤더 컨테이너
const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #343A40;
  height: 55px;
  width: 100%;
  padding: 0px;
  color: white;
`;

// 왼쪽 아이콘&텍스트 컨테이너
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 150px;
  font-size: 20px;
  font-weight:bold;
  cursor: pointer;
`;

// 오른쪽 아이콘 컨테이너
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;
  cursor: pointer;
`;

// 카메라 아이콘
const CameraIcon = styled.svg`
  width: 25px;
  height: 25px;
  margin-right: 8px;
`;

// 리스트 아이콘
const ListIcon = styled.svg`
  width: 30px;
  height: 30px;
  padding-right: 170px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeftContainer>
        <CameraIcon viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          <path fill-rule="evenodd" d="M2.5 5A1.5 1.5 0 0 0 1 6.5v5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 13.5 5h-.879a1.5 1.5 0 0 1-1.06-.44l-1.122-1.12A1.5 1.5 0 0 0 9.38 3H6.62a1.5 1.5 0 0 0-1.06.44L4.439 4.56A1.5 1.5 0 0 1 3.38 5H2.5ZM11 8.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd" />
        </CameraIcon>
        Album
      </LeftContainer>
      <RightContainer>
        <ListIcon viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
        </ListIcon>
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;