import { createGlobalStyle } from 'styled-components';
import SBSansInterface from './assets/fonts/SB-Sans-Interface.woff2';
import SBSansInterfaceSemibold from './assets/fonts/SB-Sans-Interface-Semibold.woff2';
import SBSansInterfaceBold from './assets/fonts/SB-Sans-Interface-Bold.woff2';
import SBSansText from './assets/fonts/SB-Sans-Text.woff2';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'SB Sans Interface';
  font-style: normal;
  font-weight: 400;
  src: url(${SBSansInterface}) format('woff2');
}

@font-face {
  font-family: 'SB Sans Interface';
  font-style: normal;
  font-weight: 600;
  src: url(${SBSansInterfaceSemibold}) format('woff2');
}

@font-face {
  font-family: 'SB Sans Interface';
  font-style: normal;
  font-weight: 600;
  src: url(${SBSansInterfaceBold}) format('woff2');
}

@font-face {
  font-family: 'SB Sans Text';
  font-style: normal;
  font-weight: 400;
  src: url(${SBSansText}) format('woff2');
}

*,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    height: 100%;
    background: #F4F4F5;
    font-family: 'SB Sans Interface';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`
export { GlobalStyle };
