import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
    }
    
    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        background-color: ${({ theme }) => theme.colors.mainDark};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        word-break: break-word;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;