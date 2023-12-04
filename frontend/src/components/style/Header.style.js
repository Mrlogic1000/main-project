import styled from "styled-components";


const Header = styled.header`
width: 100%;
display: flex;
justify-content: space-between;
height: var(--app-header-height);  
color: white;
background-color: var(--primary);  
`

export const StyleHeader =styled(Header)`
position: fixed;
top:0;
left:0;
right:0;
 

`
export const StyleMiniHeader = styled(Header)`
background-color: var(--white);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  margin-bottom: 20px;

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

