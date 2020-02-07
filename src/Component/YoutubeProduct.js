import React from "react";
import styled from "styled-components";
import YouTube from "@u-wave/react-youtube";

const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  /* font-family: "Orbitron", sans-serif; */

  margin: 20px;
  margin-top: 50px;
  margin-bottom: 60px;

  /* margin-bottom: 100px; */
  padding-top: 50px;
  text-align: center;
  font-family: "Changa", sans-serif;
  font-size: 50px;
  font-weight: 600;
  color: white;
  text-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const YoutubeProduct = ({ video }) => (
  <Container>
    <Title>Introduction Cigarap</Title>
    <YouTube
      video={"Y37bzku1zdU"}
      width={854}
      height={480}
      // autoplay
      version={3}
      loop={1}
    ></YouTube>
  </Container>
);

export default YoutubeProduct;
