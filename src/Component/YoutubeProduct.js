import React from "react";
import styled from "styled-components";
// import YouTube from "@u-wave/react-youtube";

const Container = styled.div`
  width: 100vw;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    width: 100vw;
    height: 200px;
  }
`;

const Title = styled.div`
  /* font-family: "Orbitron", sans-serif; */

  margin: 20px;
  margin-top: 200px;
  margin-bottom: 60px;

  /* margin-bottom: 100px; */
  padding-top: 50px;
  text-align: center;
  font-family: "Changa", sans-serif;
  font-size: 50px;
  font-weight: 600;
  color: white;
  text-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  @media only screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const MyouTube = styled.div`
  @media only screen and (max-width: 768px) {
    ywidth: 375;
    yheight: 212;
  }
`;

const YoutubeProduct = ({ video, width, height }) => (
  <Container>
    <Title>Introduction Cigarap</Title>
    <MyouTube>
      <iframe
        frameborder="0"
        allowfullscreen="1"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        title="YouTube video player"
        width="375"
        height="212"
        src="https://www.youtube.com/embed/Y37bzku1zdU?autoplay=false&amp;cc_load_policy=0&amp;controls=1&amp;disablekb=0&amp;fs=1&amp;iv_load_policy=1&amp;modestbranding=0&amp;playsinline=0&amp;rel=1&amp;showinfo=1&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=1"
        id="widget2"
      ></iframe>
    </MyouTube>

    {/* <YouTube
      video={"Y37bzku1zdU"}
      width={375}
      height={212}
      // autoplay
      version={3}
      loop={1}
    ></YouTube> */}
  </Container>
);

export default YoutubeProduct;
