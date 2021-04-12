import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

body{
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif;

}
body::-webkit-scrollbar{
    width: 0.5rem;
}
body::-webkit-scrollbar-thumb{
    background-color: darkgray;
}
  
`;

export default GlobalStyle;
