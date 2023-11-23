import styled from "styled-components";

export const StyleHeader =styled.header`
background-color: var(--primary);  
position: fixed;
top:0;
left:0;
right:0;
  display: flex;
  justify-content: space-between;
  height: var(--app-header-height);  
  color: white;

`


export const Logo = styled.div`
background-color: var(--sidebar-header);
width: var(--sidebar-size);
height: 100%;
  display: flex;
  color: var(--white);
  gap: 10px;
  padding: 20px;
  align-items: center;
  text-align: center;


`