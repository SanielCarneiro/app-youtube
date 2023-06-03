import styled  from 'styled-components';

export const Container = styled.div<{ openMenu: boolean }>`
width: ${({ openMenu }) => openMenu? '170px' : '70px' };
height: calc(100vh - 55px);
box-sizing: border-box;
padding: 10px 10px 10px 10px;
display: flex;
align-items: center;
flex-direction: column;
overflow-y: auto;
position: sticky;
top: 55px;
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
width: 98%;
min-height: ${({ openMenu }) => openMenu? '45px' : '65px' };;
border-radius: 10px;
cursor: pointer;
padding: 2px 15px;
box-sizing: border-box;
display: flex;
flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column' };
align-items: center;
justify-content: ${({ openMenu }) => openMenu? 'none' : 'center' };


span{
font-weight: ${({ openMenu }) => openMenu? '400' : '400' };
margin-left: ${({ openMenu }) => openMenu? '20px' : 'none' };
font-size: ${({ openMenu }) => openMenu? '14px' : '10px' };
}   

:hover {
  
}
`;

export const ButtonIcon = styled.img`
width: 22px;

`;
