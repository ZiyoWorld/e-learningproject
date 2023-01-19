import styled from "styled-components";

export const Container = styled('div')`
display: block;
justify-content: space-around;
align-items: center;
padding: 5rem 10rem;
`;
export const Description = styled.div`
flex: 1;
padding-left: 5rem;
h2{
    font-weight: lighter;
    padding-bottom: 2rem;
}
.questions{
    padding: 3rem 0;
    cursor: pointer;
}
.answer{
    padding: 2rem 0;
    p{
        padding: 1rem 0;
    }
}
h3{
     font-size: 1.4rem;
     padding: 1rem;
     background-color: #fff;
     font-weight: 400;
     color: #000;
     margin: 1rem;
     clip-path: polygon(0 10%, 100% 0, 100% 85%, 0% 100%);
     border-left: 10px solid #30bee1;
}
`;
export const Image = styled.div`
flex: 1;
overflow:hidden;
img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
}
`;

export const Hide = styled.div`
overflow: hidden;
`