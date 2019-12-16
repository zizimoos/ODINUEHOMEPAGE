import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
${reset};
a{
    text-decoration: none;
    color: inherit;
}
@import url('https://fonts.googleapis.com/css?family=Nanum+Myeongjo&display=swap');
*{
    box-sizing:border-box;
}
body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-family: 'Nanum Myeongjo', serif;
    font-size: 12px;
    background-color:rgba(20,20,20,1);
    color: white;
    padding-top:50px;
    width: 100vw;
    @media (min-width: 320px) and (max-widith: 480) {
    width: 100vw;
  }
}

`;

export default GlobalStyles;
