import styled from 'styled-components'

export const TMain = styled.main`
{
    width: 82vw;
    height: 90vh;
    background-color: #fff5;   
    backdrop-filter: blur(7px);
    box-shadow: 0 .4rem .8rem #0005;
    border-radius: .8rem;
    overflow: hidden;
   }`
export const Tbody = styled.section`
{
    width: 95%;
    min-height: calc(89% - 1.6rem);
    background-color: #fffb;
    margin: .8rem auto;
    border-radius: .6rem;
    overflow: auto;   
      
    
   }`
export const THeader = styled.section`{
   
        width: 100%;
        height:  10%;
        background-color: #fff4;
        padding: .8rem 1rem;
      
    
   }`

   


const Table = styled.table`
  width: 100%;  
  border-collapse: collapse;
  background-color: var(--white);
  padding: 0;
  margin-top: 10px;
  tbody tr{
    border-left: .5em solid;
  }

  
  td img{
    width: 36px;
    height: 36px;
    margin-right: 0.5em;
    border-radius: 50%;
    vertical-align: middle;
  }

  td,th{
    border-bottom: 1px solid var(--borde-color);
    text-align: left;
    padding: 1em;
    padding-left: 5px;
  }
  tr:nth-child(even) {
    background-color: rgba(100, 100, 100, .1);
    
  }
  
  `

  export const STable  = styled(Table)`
  
  `