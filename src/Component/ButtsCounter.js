import React from "react";
import styled from "styled-components";

const ButtsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtsNumberDisplay = styled.div`
  /* font-family: "Orbitron", sans-serif; */
  margin: 0 auto;
  margin: 20px;
  margin-top: 30px;
  /* margin-right: 200px; */
  text-align: center;
  font-family: "Changa", sans-serif;
  /* font-family: "IBM Plex Mono", monospace; */
  font-size: 120px;
  font-weight: 600;
  /* color: black; */
  color: #cf000f;
  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export default ({ ButtsNumber }) => (
  <ButtsContainer>
    <ButtsNumberDisplay>
      {`${ButtsNumber}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
    </ButtsNumberDisplay>
  </ButtsContainer>
);
