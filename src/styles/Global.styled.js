import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        max-width : 100vw;
        font-family: 'Red Rose', sans-serif;
        font-style: normal;
        font-weight: 400;
    }
    
`;

export default GlobalStyles;
