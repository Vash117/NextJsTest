import styled from 'styled-components';
export const StyledDiv =styled(({width = '100%',flex=false ,direction=false,bg='',pos='', ...props }) => <div {...props} />)`

width:${({ width }) => width};
font-size:250px;
display: ${({ flex }) => flex ? 'flex':''};
flex-direction: ${({direction})=> direction? 'column':'row'};
height: 75vh;
position:relative;
margin: 0 auto;
background-color: ${({bg})=> bg};
justify-content:space-between;
align-items:center;
border-radius:5px;
gap:1rem;
margin-left:${({pos})=> pos};
@media (max-width: 1024px) {
    flex-direction:  ${({media})=> media};
    div>div{
        margin-left:0
    }
  }

`