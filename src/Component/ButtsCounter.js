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
  margin-top: 50px;
  /* margin-right: 200px; */
  text-align: center;
  font-family: "Changa", sans-serif;
  /* font-family: "IBM Plex Mono", monospace; */
  font-size: 80px;
  font-weight: 600;
  color: black;
`;

export default ({ ButtsNumber }) => (
  <ButtsContainer>
    <ButtsNumberDisplay>
      {`${ButtsNumber}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
      cigaretteButts
    </ButtsNumberDisplay>
  </ButtsContainer>
);
