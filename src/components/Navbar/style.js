import styled from "styled-components";

export const Container = styled.nav`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;

a{
    text-decoration: none;
    color: #fff;

}
ul{
    display: flex;
    list-style: none;
}
#logo{
    font-weight: lighter;
    font-size: 1.5rem;
    font-family: 'Silkscreen', cursive;
}
li{
    padding-left: 10rem;
    position: relative;
}

`;
