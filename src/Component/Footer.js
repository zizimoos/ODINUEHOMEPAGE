import React from "react";
import styled from "styled-components";
import cigarapBI from "../assets/footer/cigarap_BI_font.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube
  // faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import {
  faGlobeAmericas,
  faEnvelope,
  faAddressCard,
  faCoffee,
  faMapMarker
} from "@fortawesome/free-solid-svg-icons";

const Footer = styled.div`
  width: 100vw;
  height: 250px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 20px;
  font-family: "Changa", sans-serif;
  padding-left: 200px;
  padding-right: 200px;
  background-color: #2c3f51;
  color: #bc6c6b;
`;
const FooterGrid = styled.div`
  width: 250px;
  margin: 0 auto;
`;
const Title = styled.div`
  /* font-family: "Orbitron", sans-serif; */
  margin: 0 auto;
  margin: 20px;
  margin-top: 40px;
  margin-bottom: 25px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #95a5a6;
  /* background-color: peru; */
  /* text-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8); */
`;
const SubTitle = styled.span`
  /* font-family: "Orbitron", sans-serif; */
  margin: 20px;
  margin-top: 30px;
  margin-bottom: 40px;
  vertical-align: 30%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 13px;
  font-weight: 300;
  color: whitesmoke;
  /* background-color: peru; */
  /* text-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8); */
`;

const BIImage = styled.div`
  width: 50%;
  height: 30px;
  margin-top: 100px;
  margin-bottom: 30px;
  margin-left: 5px;
  background-image: url(${cigarapBI});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  transition: transform 0.3s ease-in-out;
`;

const FooterItem = styled.div`
  margin-left: 30px;
  margin-bottom: 10px;
  color: #95a5a6;
`;

const EndDescription = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 12px;
  font-weight: 200;
  color: whitesmoke;
`;

export default () => (
  <Footer>
    <FooterGrid>
      {/* <Title>Follow Us</Title> */}
      <FooterItem>
        <BIImage></BIImage>
      </FooterItem>
      {/* <FooterItem>
        <FontAwesomeIcon
          icon={faFacebookSquare}
          size={"2x"}
          color={"#95a5a6"}
        />
        <SubTitle>FaceBook</SubTitle>
      </FooterItem> */}
      {/* <FooterItem>
        <FontAwesomeIcon icon={faInstagram} size={"2x"} color={"#95a5a6"} />
        <SubTitle>Instagram</SubTitle>
      </FooterItem>
      <FooterItem>
        <FontAwesomeIcon icon={faYoutube} size={"2x"} color={"#95a5a6"} />
        <SubTitle>YouTube</SubTitle>
      </FooterItem>
      <FooterItem>
        <FontAwesomeIcon icon={faCoffee} size={"2x"} color={"#95a5a6"} />
        <SubTitle>Naver Cafe</SubTitle>
      </FooterItem> */}
    </FooterGrid>
    <FooterGrid>
      <Title>Connect Us</Title>
      {/* <FooterItem>
        <FontAwesomeIcon icon={faSmoking} size={"2x"} color={"white"} />
      </FooterItem> */}
      {/* <FooterItem>
        <FontAwesomeIcon icon={faGlobeAmericas} size={"2x"} color={"#95a5a6"} />
      </FooterItem> */}
      <FooterItem>
        <FontAwesomeIcon icon={faEnvelope} size={"2x"} color={"#95a5a6"} />
        <SubTitle>cigarpretty@odinue.net</SubTitle>
      </FooterItem>
      <FooterItem>
        <FontAwesomeIcon icon={faAddressCard} size={"2x"} color={"#95a5a6"} />
        <SubTitle>02 876 6825</SubTitle>
      </FooterItem>
      {/* <FooterItem>
        <FontAwesomeIcon
          icon={faFacebookSquare}
          size={"2x"}
          color={"#95a5a6"}
        />
        <SubTitle>FaceBook</SubTitle>
      </FooterItem> */}
      {/* <FooterItem>
        <FontAwesomeIcon icon={faInstagram} size={"2x"} color={"#95a5a6"} />
        <SubTitle>Instagram</SubTitle>
      </FooterItem> */}
      {/* <FooterItem>
        <FontAwesomeIcon icon={faYoutube} size={"2x"} color={"#95a5a6"} />
        <SubTitle>YouTube</SubTitle>
      </FooterItem> */}
      {/* <FooterItem>
        <FontAwesomeIcon icon={faCoffee} size={"2x"} color={"#95a5a6"} />
        <SubTitle>Naver Cafe</SubTitle>
      </FooterItem> */}
      <FooterItem>
        <FontAwesomeIcon icon={faMapMarker} size={"2x"} color={"white"} />
        <SubTitle>서울특별시 성동구 뚝섬로 1길</SubTitle>
        <SubTitle>{` --- 서울숲 M 타워 1206, 1207 호`}</SubTitle>
      </FooterItem>
    </FooterGrid>
    {/* <FooterGrid>
      <Title>Address</Title>
      <FooterItem>
        <FontAwesomeIcon icon={faSmoking} size={"2x"} color={"white"} />
      </FooterItem>
    </FooterGrid> */}
    <FooterGrid>
      <Title>About Us</Title>
      {/* <FooterItem>
        <FontAwesomeIcon icon={faSmoking} size={"2x"} color={"white"} />
      </FooterItem> */}
      <FooterItem>
        <FontAwesomeIcon icon={faGlobeAmericas} size={"2x"} color={"white"} />
      </FooterItem>
      <FooterItem>
        <FontAwesomeIcon icon={faEnvelope} size={"2x"} color={"white"} />
      </FooterItem>
      <FooterItem>
        <FontAwesomeIcon icon={faAddressCard} size={"2x"} color={"white"} />
      </FooterItem>
    </FooterGrid>
    <EndDescription>
      <Title></Title>
      copyright 2020
    </EndDescription>
  </Footer>
);
