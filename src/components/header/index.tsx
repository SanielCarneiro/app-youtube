import { ButtonContainer,
     ButtonIcon,
     Container,
     LogoContainer,
     SearchContainer,
     SearchInputContainer,
     SearchInput,
     SearchButton,
     HeaderButton }
     from "./style";    
import HamburguerIcon from '../../assets/hamburger.png'
import logo from '../../assets/YouTube-Logo.png'
import SearchIcon from '../../assets/search_117b78df834249fdb899e63f5f5a8aac.png'
import MicIcon from '../../assets/microfone-gravador_5aec03c3660f4d97b7d99219e43f0185.png'
import VideoIcon from '../../assets/video_1a3f517c18cd4d86ab8f61fabd033f5a.png'
import Notification from '../../assets/sino_382bed4de97b4204abbd5eb05c8795d9.png'

interface Iprops {
    openMenu: boolean,
    setOpenMenu:( openMenu: boolean) => void
}

function Header({openMenu, setOpenMenu} : Iprops){
    return(
        <Container>
            <LogoContainer>
               <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                <ButtonIcon alt="" src={HamburguerIcon}/>
                </ButtonContainer>
                <img
                style={{ cursor: 'pointer', width: '100px'}}
                alt=''
                src={logo}
                /> 
            </LogoContainer>

            <SearchContainer>
               <SearchInputContainer>
                <SearchInput placeholder='Pesquisar'/>
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon}/>
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon}/>
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
            <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={VideoIcon}/>
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={Notification}/>
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    S
                </ButtonContainer>
            </HeaderButton>

        </Container>
    )
}
 
export default Header; 