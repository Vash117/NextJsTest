// The Card to be exported goes here
import StyledDiv from '../../components/MyDiv/MyDiv'
import StyledSubtitle from '../../components/Subtitle/Subtitle'

import Image from "next/image";
const Card =(props)=>{
    return(
      
        <StyledDiv media='column' width='100%' flex = 'true'>
            <StyledDiv width='50%'>
            <Image className='video-img' layout="fill" src={props.bg} alt='bg' />
            <StyledDiv width='50%' flex='false'>
             <Image className='video-img rigth' layout="fill" src={props.videoImg} alt='video' />
            </StyledDiv>
            </StyledDiv>
            <StyledDiv width='50%' flex='true' direction='column'>
               <StyledDiv width='70%' flex='true' bg='lightgrey' pos='0'>
                  <StyledSubtitle>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</StyledSubtitle>
             </StyledDiv>
             <StyledDiv width='80%' flex='true' bg='lightgrey'  pos='0'>
                <StyledSubtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit.</StyledSubtitle>
             </StyledDiv>
             <StyledDiv width='90%' flex='true' bg='lightgrey'  pos='0'>
                <StyledSubtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit.</StyledSubtitle>
               </StyledDiv>
            </StyledDiv>
        </StyledDiv>
       
    )
}


export default Card
