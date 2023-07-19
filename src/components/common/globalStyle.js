import { createGlobalStyle } from 'styled-components';

// CSS Reset setting
export const ResetStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  box-sizing: border-box;
}
address, caption, cite, code, dfn, em, strong, th, var, b {
  font-weight: normal;
  font-style: normal;
}
abbr, acronym {
  border: 0;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
}
body {
    line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
q {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption, th {
  text-align: left;
}
textarea {
  resize: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
button {
  padding: 0;
}
a:-webkit-any-link  {
  color: inherit;
}
`;

// CSS globalStyle setting

export const GlobalStyle = createGlobalStyle`

html {
  margin: 0;
  max-width: 1280px;
  font-size: 16px;
  box-sizing: border-box;
  font-family: 'Montserrat','Noto Sans TC', sans-serif;
}

body{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
}


@media (max-width: 1199px) {
 
   
}

@media (max-width: 991px) {
 
}

// CSS common variables
:root {
  // font-size
  --font-size-h1: 4.25rem;
  --font-size-h2: 2.6255rem;
  --font-size-h3: 1.75rem;
  --font-size-h4: 1.5rem;
  --font-size-h5: 1.125rem;
  // colors
  --color-primary:#0062FF;
  --color-theme: #FF6600;
  --color-white: #FFFFFF;
  --color-form: #F5F8FA;
  --color-success: #82C43C;
  --color-danger: #FC5A5A;
  --color-warning: #FFC542;
  --color-secondary-blue: #50b5ff;
  --color-gray-60: #B5B5BE;
  --color-gray-80: #696974;
  --color-gray-90: #44444F;
  
}

`;
