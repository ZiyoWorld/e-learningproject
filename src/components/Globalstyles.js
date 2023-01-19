import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding:  0;
    box-sizing:  border-box;
}
body{
    background-color: #2a2e35;
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    background-color: transparent;
    padding: 1rem 2rem;
    border: 3px solid #30BEE1;
    color: #fff;
    transition: all 0.25s linear;
    &:hover{
        background-color: #30BEE1;
        color: #2a2e35;
    }
}
h2{
    font-weight: lighter;
    font-size: 3rem;
}
h3{
    color: #fff;
}
h4{
    font-weight: bold;
    font-size:2rem;
}
span{
    color: #30BEE1;
    font-weight: bold;
}
a{
    font-size: 1.1rem;
}
p{
    padding: 1rem 1rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}
.faq-line{
    height: 0.2rem;
    background-color: #ccc;
    width: 100%;
    margin: 2rem 0;
}

`