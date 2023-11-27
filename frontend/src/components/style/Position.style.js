import styled from "styled-components";


export const Absoulute = styled.span`
position: absolute;
top: ${({top})=>top};
left: ${({left})=>left};
right: ${({right})=>right};
bottom:${({bottom})=>bottom || ''}

`