import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 130px;
  width: 100%;
  color: #212529;
  background-color: #ffffff;
`;

const FooterLeft = styled.div`
  display: flex;
  padding-left: 200px;
`;

const FooterRight = styled.div`
  display: flex;
  padding-right: 200px;
  padding-bottom:25px ;
`;

const Footer = () => {
    return (
    <FooterContainer>
        <FooterLeft>Album example is © Bootstrap, but please download and customize it for yourself!
        <br/>New to Bootstrap? Visit the homepage or read our getting started guide.
        </FooterLeft>
        <FooterRight>
        Back to top
        </FooterRight>  
    </FooterContainer>
    );
  };

export default Footer;