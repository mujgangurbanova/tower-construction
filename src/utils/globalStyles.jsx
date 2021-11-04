import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
button,
input,
blockquote {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

:root{
    --main-color:#5E44A2;
    --secondary-color:#505151;
    --orange:#FDA242;
    --blue:#3B7EA4;
    --light-main:#9C89CE;
    --green:#B9DDA8;
    --dark-green:#4C8942;
    --late-color:#D0C9E2;
    --late-title: #8068BF;
    --red:#DF6161;
    --white:#fff;
    --border-color:#C4C4C4;
    --hover:rgba(231, 226, 242, 0.63);
    --background:#F2F3F3;
    --line:#eeeeee;
    --label:#A1A2A3;
    --border:#7b7b7b;
    --line-color:#D2C7ED;
    --chart-border:#EAEBEB;
    --light-black:#6C7172;
    --box-shadow:0px 0px 8px rgba(16, 30, 115, 0.12);
    --text-area:#ABAEAF;
    --outline:#48cae4;
    --overlay: rgba(0, 0, 0, 0.6);
    --disabled:#E3DCF4;
    --pi: 3.14159265359;
    --a1: 0;
    --a2: 0;
    --a3: 0;
    --a4: 0;



}
  * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    box-sizing: border-box;
    outline: 0;
    font-family: 'DM Sans', sans-serif;
  }


body{
  overflow-x: hidden;
}

*,
*::after,
*::before {
    box-sizing: border-box;

}

html {
    font-size: 16px;
}




`;

export default GlobalStyle;
