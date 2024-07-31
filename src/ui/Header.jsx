import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import UserAvatar from '../features/authentication/UserAvatar';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';
import { useState } from 'react';

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 2rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handlemenu = () => setMenuOpen((prev) => !prev);
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
      <Hamburger onClick={handlemenu} />
      {isMenuOpen && <MobileMenu />}
    </StyledHeader>
  );
}

export default Header;
