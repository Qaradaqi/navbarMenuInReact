import { createGlobalStyle } from "styled-components";
import { pallete } from "./theme";

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 10px;
}
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
body {
  direction: rtl;
  font-family: "Vazirmatn FD", sans-serif;
  background: ${pallete.whiteColor};
  color: ${pallete.darkColor};
}
a {
  text-decoration: none;
}
ul , ol {
  list-style: none;
}
.container {
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
}
.ptb-5 {
  padding: 5px 0;
}
.ptb-10 {
  padding: 10px 0;
}
.prl-5 {
  padding: 0 5px;
}
.prl-10 {
  padding: 0 10px;
}
.mtb-5 {
  margin: 5px 0;
}
.mtb-10 {
  margin: 10px 0;
}
.mrl-5 {
  margin: 0 5px;
}
.mrl-10 {
  margin: 0 10px;
}
.flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.align-start {
  align-items: start;
}
.align-center {
  align-items: center;
}
.align-end {
  align-items: end;
}
..justify-between {
  justify-content: space-between;
}
.justify-center {
  justify-content: center;
}
.justify-start {
  justify-content: start;
}
.justify-end {
  justify-content: end;
}
.justify-evenly {
  justify-content: space-evenly;
}
.justify-around {
  justify-content: space-around;
}
.gap-5 {
  gap: 5px;
}
.gap-10 {
  gap: 10px;
}
`;
