
import {  ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer} from "./styles";

    
    
    function VideoComponent(){
      
    return(
       <Container>
        <ImageBanner src="https://i.ytimg.com/vi/2fngvQS_PmQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXz5mkx7QLoeUBPbgyag5o8aBlCA"/>
        <TitleContainer>
            <ChannelImage>
                SC
            </ChannelImage>
            <TextContainer>
                <Title>Ed Sheeran - I See Fire (Music Video)</Title>
                <TextCard>CLS Videos</TextCard>
                <TextCard>424.303.027 visualizações  27 de nov. de 2013</TextCard>
            </TextContainer>
        </TitleContainer> 
       </Container>
   )
}

export default VideoComponent; 