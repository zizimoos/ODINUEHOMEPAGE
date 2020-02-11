import React from "react";
import styled from "styled-components";
import interviewPic_01 from "../assets/homeImages/interviewPic_01.png";
import interviewPic_02 from "../assets/homeImages/interviewPic_02.jpg";
import interviewPic_03 from "../assets/homeImages/interviewPic_03.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish, faCrow, faDog } from "@fortawesome/free-solid-svg-icons";

const HomeSecond = styled.div`
  width: 100vw;
  height: 900px;
  margin: 0 auto;
  background-color: #336e7b;
  /* background-color: #00cbe0; */
  /* background-color: #01283c; */
`;
const Title = styled.div`
  /* font-family: "Orbitron", sans-serif; */
  margin: 0 auto;
  margin: 20px;
  margin-top: 0px;
  /* margin-bottom: 100px; */
  padding-top: 100px;
  text-align: center;
  font-family: "Changa", sans-serif;
  font-size: 50px;
  font-weight: 600;
  color: whitesmoke;
  text-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const InterviewSection = styled.div`
  width: 100vw;
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 0px;
  padding-top: 80px;
  padding-right: 300px;
  padding-left: 300px;
  margin-bottom: 80px;
  justify-content: space-around;
`;
const ParagraphContainer = styled.div`
  margin: 0 auto;
  margin: 20px;
  margin-top: 0px;
  margin-bottom: 40px;
  width: 300px;
  height: 500px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: 100;
  color: gray;
  border-radius: 3px;
  border: 1px solid #95a5a6;
  background-color: whitesmoke;
  text-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const ParagraphIcon = styled.div`
  /* font-family: "Orbitron", sans-serif; */
  margin-top: 20px;
  margin-bottom: 40px;
  padding-left: 26px;
  padding-right: 26px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 25px;
  font-weight: 400;
  color: #95a5a6;
  text-align: center;
  text-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Paragraph = styled.div`
  /* font-family: "Orbitron", sans-serif; */
  margin-top: 0px;
  padding-left: 26px;
  padding-right: 26px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #95a5a6;
  text-align: center;
  text-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const ParagraphWriter = styled.div`
  /* font-family: "Orbitron", sans-serif; */
  margin: 10px;
  margin-top: 5px;
  /* width: 50vw; */
  /* text-align: center; */
  /* font-family: "Nanum Myeongjo", serif; */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 13px;
  font-weight: 400;
  /* color: #2574a9; */
  color: #003755;
  color: #95a5a6;
  text-align: center;
  text-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const ParagraphPhoto = styled.div`
  /* font-family: "Orbitron", sans-serif; */
  width: 230px;
  height: 230px; /* text-align: center; */
  margin-bottom: 20px;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: 140%;
  border-radius: 50%;

  background-color: #336e7a;
  border: 1px solid #95a5a6;
  &:hover {
    background-size: 180%;
    /* border: 6px solid whitesmoke; */
    /* box-shadow: inset 0px 0px 10px 10px #336e7a; */
    border: 4px solid #336e7a;

    /* #336E7A */
  }
  transition: background-size 1s ease-in-out;
  /* border: 2px solid #2574a9; */
  text-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

export default () => (
  <HomeSecond>
    <Title>Whoever dumps the butts on the street?</Title>
    <Paragraph>
      {`Most of the cigarettebutts dumped on the street run through sewers and streams into the sea.`}
    </Paragraph>
    <Paragraph>
      {`And in the process, it breaks down into microplastics and is absorbed by marine life.`}
    </Paragraph>
    <InterviewSection>
      <ParagraphContainer>
        <ParagraphPhoto bgImage={interviewPic_01}></ParagraphPhoto>
        <ParagraphIcon>
          <FontAwesomeIcon icon={faFish} size={"1x"} />{" "}
        </ParagraphIcon>
        <Paragraph>
          {`The microplastic is already on our dinner table.`}
        </Paragraph>
      </ParagraphContainer>
      <ParagraphContainer>
        <ParagraphPhoto bgImage={interviewPic_02}></ParagraphPhoto>
        <ParagraphIcon>
          <FontAwesomeIcon icon={faCrow} size={"1x"} />{" "}
        </ParagraphIcon>
        <Paragraph>
          {`"If you smoke, please don't leave your butts behind "`}
        </Paragraph>
        <ParagraphWriter>{`- Karen Mason who took this photo said`}</ParagraphWriter>
      </ParagraphContainer>
      <ParagraphContainer>
        <ParagraphPhoto bgImage={interviewPic_03}></ParagraphPhoto>
        <ParagraphIcon>
          <FontAwesomeIcon icon={faDog} size={"1x"} />{" "}
        </ParagraphIcon>
        <Paragraph>
          {`Cigarettebutts contain microplastics & chemicals  that can poison wildlife`}
        </Paragraph>
      </ParagraphContainer>
    </InterviewSection>
  </HomeSecond>
);
