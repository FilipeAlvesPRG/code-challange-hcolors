import logo_with_text_black from '../../assets/logo_with_text_black.svg'
import styled from 'styled-components';

const NavBar = styled.nav`
    display: flex;
  justify-content: space-around;
  align-items: center;
  background: transparent;
  height: 8vh;
  margin-left: 10px;
  margin-right: 20px;
`;

const LogoImage = styled.img`
  width: 150px;
  
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


export default function TopBarComponent() {
  return (
      <NavBar>
        <a href="#">
          <LogoImage src={logo_with_text_black} />
        </a>
        <NavList>
          <NavItem><LinkMenu href="#">Sobre nós</LinkMenu></NavItem>
          <NavItem><LinkMenu href="calculadora">Calculadora</LinkMenu></NavItem>
          <NavItem><LinkMenu href="#">Serviços</LinkMenu></NavItem>
          <NavItem><LinkMenu href="#">Dicas</LinkMenu></NavItem>
        </NavList>
        <Button>Entrar</Button>
        <OutilineButton>Cadastro</OutilineButton>
      </NavBar>
  );
}