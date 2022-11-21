import { createGlobalStyle } from 'styled-components';
import imageGus from './images/gus.svg';

export const GlobalStyle = createGlobalStyle`
:root {
  --container-bg-color: #ffffff;
  --primary-text-color: #1B1D1F;
  --acent-color: #FF6B0A;
  --input-text-color: #a7a3a3;
  --base-font-size: 16px;
}

body {
  height: 100vh;
  margin: 0;
  padding-top: 80px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: var(--base-font-size);
  line-height: 1.5;
  color: var(--primary-text-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url("${imageGus}"), linear-gradient(270.19deg, #D9D9D9 0.15%, #A5DEFF 0.16%, #FCFEFF 99.82%) ;
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: auto auto;
  background-attachment: fixed;
}

code {
  font-family: 'Montserrat', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}

h1 {
  font-style: 400;
  font-weight: 600;
  font-size: 64px;
  line-height: 72px;
  color: #1b1d1f;

}

h2 {
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #ff6b0a;
  margin-bottom: 48px;
}

h3 {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #1b1d1f;
  margin-bottom: 16px;
}

p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1b1d1f;
  margin-top: 24px;
  margin-bottom: 48px;
}
`;
