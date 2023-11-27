import styled from "styled-components";





export const StyleAvarter = styled.div`
display: flex;
align-items: center;
height: 100%;
margin-right: 20px;
img{
    vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
span{
    font-weight: bold;
    padding: 0 5px
}

`
export const StyleAvarterWithIcon = styled.div`
position: relative;
display: flex;
align-items: center;
height: 100%;
width: 100%;
margin-right: 20px;
img{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit:fill;
  margin: auto;
}


`
export const StyleIcon = styled.div`
padding:.3em;
height:35px;
width:35px;
display:flex;
align-item:center;
justify-content:center;
border-radius:50%;
font-size: ${({size})=>size};
background-color: ${({bg})=>bg};
color:${({color})=>color}
`