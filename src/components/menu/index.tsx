import { useNavigate } from 'react-router-dom';
import Notification from '../../assets/sino_382bed4de97b4204abbd5eb05c8795d9.png'
import {
    ButtonIcon,
    Container, MenuItem,
 }
    from "./styles";

    const items = [{name: 'Início', link: '/'},{name: 'Biblioteca', link: '/library'},
    {name: 'Histórico', link: '/history'},{name: 'Seus vídeos', link: '/myvideos'},
    {name: 'Inscrições', link: '/Inscriptions'},{name: 'Short', link: '/Shorts'}]
    
    interface Iprops {
        openMenu: boolean;
    }
    
    function Menu({ openMenu }: Iprops){
        const navigate = useNavigate();
    return(
       <Container openMenu={openMenu}>
        {items.map((item) => (
        <MenuItem  openMenu={openMenu} onClick={() => navigate(item.link)}>
            <ButtonIcon alt="" src={Notification}/>
            <span>{item.name}</span>
        </MenuItem>
        ))}
       </Container>
   )
}

export default Menu; 