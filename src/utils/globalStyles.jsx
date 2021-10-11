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

.wrapper{
  max-width: 87.5rem;
  margin: 0 auto;

}

.fin-kod{
    display: flex;
    align-items: center;
}



.container{
    display: flex;
    position: relative;
}

.checkbox{
    display: flex;
    margin-top: 20px;
    align-items: center;
}

.add-customers{
    flex: 3;
    height: 44px;
    background: var(--orange);
    border: 1px solid var(--orange);
    border-radius: 10px;
    color: var(--white);
    cursor: pointer;
}

.check-label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.check-label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: var(--orange);
}

.check-label:hover input ~ .checkmark {
  background-color: #ccc;
}

.check-label input:checked ~ .checkmark {
  background-color: var(--orange);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.check-label input:checked ~ .checkmark:after {
  display: block;
}

.check-label .checkmark:after {
  left: 10px;
  top: 7px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.icon{
  position: relative;
}
#file{
  background: var(--white);
  outline: none;
}

::-webkit-file-upload-button{
  color: var(--white);
  background: var(--main-color);
  border: 1px solid var(--main-color);
  border-radius:30px;
  padding: 2px;

}


.loader-wrapper {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
}

.active {
    transform: translateY(0);
}
`;
export default GlobalStyle;
