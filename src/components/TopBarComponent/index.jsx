import logo_with_text_black from '../../assets/logo_with_text_black.svg'
import styled from 'styled-components';
import MenuMobileComponent from '../MenuMobileComponent';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: transparent;
  height: 8vh;
  width: 100%;
`;

const LogoImage = styled.img`
  width: 120px;
  
`;

const LinkMenu = styled.a`
   text-decoration: none;
   color: #8D8D8D;
   font-family: ${props => props.theme.fonts[0]};
   &:hover {
    cursor: pointer;
    color:#000;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #9BD9A7;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const NavItem = styled.li`
 margin-left: 32px;

`;

const Button = styled.button`
  background-color: transparent;
  font-family: ${props => props.theme.fonts[0]};
  font-weight: bold;
  border: none;
  text-align: center;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    color:#8D8D8D;
  }
`;

const OutilineButton = styled.button`
  background-color: transparent;
  border: 1px solid #8D8D8D;
  text-align: center;
  font-size: 16px;
  padding: 8px;
  border-radius: 10px;
  &:hover {
    background-color: #8D8D8D;
    color: #fff;
    cursor: pointer;
    transition: 0.4s;
  }
`;


export default function TopBarComponent({ open }) {
  return (
    <NavBar >
      <a href="#">
        <LogoImage src={logo_with_text_black} />
      </a>
      <NavList open={open}>
        <NavItem><LinkMenu href="#">Sobre nós</LinkMenu></NavItem>
        <NavItem><LinkMenu href="calc">Calculadora</LinkMenu></NavItem>
        <NavItem><LinkMenu href="#">Serviços</LinkMenu></NavItem>
        <NavItem><LinkMenu href="#">Dicas</LinkMenu></NavItem>
        <Button>Entrar</Button>
        <OutilineButton>Cadastro</OutilineButton>
      </NavList>
    </NavBar>
  );
}