import StyledHeader from "../../components/Header/Header";
import StyledSection from "../../components/Mysection/Mysection";
import { StyledSubtitle } from "../../components/Subtitle/elements";
import img from '../../collections/Card/video.png'
import bgImg from '../../collections/Card/background.png'
import Card from "../../collections/Card/Card";
export const MainSection   = (props)=>{
  return(
    <StyledSection>
    <StyledHeader >{props.text}</StyledHeader>
    <StyledSubtitle >{props.subtext}</StyledSubtitle>
    <Card videoImg={img} bg={bgImg}/>
    </StyledSection>
  )
}
