import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 800px;
  margin: 0 auto;
  padding: 10px;
  background-color: whitesmoke;
`;

const Title = styled.div`
  margin: 20px;
  margin-top: 0px;

  padding-top: 50px;
  text-align: center;
  font-family: "Changa", sans-serif;
  font-size: 50px;
  font-weight: 600;
  color: #7a7f78;
`;
const SubTitle = styled.div`
  text-align: center;
  margin-bottom: 50px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 15px;
  font-weight: 300;
  color: #7a7f78;
`;

const SurbeyContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Surbey = styled.div`
  position: relative;
  width: 25vw;
  height: 400px;
  margin-left: 100px;
  margin-right: 100px;
`;

const Description = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 20px;
  text-align: justify;
  color: black;
  position: absolute;
  top: 0px;
`;

const Progress = keyframes`
0% {
    stroke-dasharray: 0 100;
  }`;

const Svg = styled.svg`
  display: block;
  position: absolute;
  top: 0;
  left: 36px;
  margin: 10px auto;
  margin-top: 120px;
  max-width: 80%;
  max-height: 250px;
  path {
    /* stroke: #4cc790; */
    stroke: #3498db;
    fill: none;
    stroke-width: 2.8;
    stroke-linecap: round;
    animation: ${Progress} 3s ease-out forwards;
  }
  z-index: 10;
  text {
    fill: #666;
    font-family: sans-serif;
    font-size: 0.5em;
    text-anchor: middle;
  }
`;

const SvgBg = styled.svg`
  display: block;
  position: absolute;
  top: 0;
  left: 36px;
  margin: 10px auto;
  margin-top: 120px;
  max-width: 80%;
  max-height: 250px;
  path {
    stroke: #dadfe1;
    fill: none;
    stroke-width: 2.8;
    stroke-linecap: round;
    animation: ${Progress} 1s ease-out forwards;
  }
`;

export default () => (
  <Container>
    <Title>Dooit Surbey Report</Title>
    <SubTitle>http://www.dooit.co.kr/survey/report/index/189200/all</SubTitle>
    <SurbeyContainer>
      <Surbey>
        <Description>
          담배꽁초 수거함이 없어 담배꽁초를 주머니 등에 보관해 보신 경험이
          있습니까? (단일선택, 701)
        </Description>

        <Svg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle"
            stroke-dasharray="64, 100"
            d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35">
            64%
          </text>
        </Svg>
        <SvgBg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle"
            stroke-dasharray="100, 100"
            d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </SvgBg>
      </Surbey>
      <Surbey>
        <Description>
          담배필터 성분이 플라스틱이고 해양 미세플라스틱의 가장 많은 부분을
          차지하고 있다는 사실을 알고 계십니까?(단일선택, 701)
        </Description>

        <Svg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle"
            stroke-dasharray="37, 100"
            d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35">
            37%
          </text>
        </Svg>
        <SvgBg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle"
            stroke-dasharray="100, 100"
            d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </SvgBg>
      </Surbey>
      <Surbey>
        <Description>
          담배꽁초를 편리하게 휴대할 수 있는 도구를 제공하고, 담배꽁초를
          판매점에서 반환한 소비자에게 인센티브를 주는 캠페인을 진행할 경우
          참여하실 생각이 있으십니까? (단일선택, 701)
        </Description>

        <Svg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle"
            stroke-dasharray="47, 100"
            d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35">
            47%
          </text>
        </Svg>
        <SvgBg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle"
            stroke-dasharray="100, 100"
            d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </SvgBg>
      </Surbey>
    </SurbeyContainer>
  </Container>
);
