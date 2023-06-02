import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 16px;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    ul, li {

        margin: 0;
        padding: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        display: block;
        max-width: 100%;
    }
`;

export default GlobalStyle;
