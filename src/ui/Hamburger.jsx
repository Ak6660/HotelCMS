import { HiMenu } from 'react-icons/hi';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';

const StyledMobileMenu = styled.div`
  display: none;
  background-color: var(--color-grey-0);

  @media (max-width: 600px) {
    display: block;
  }
`;
function Hamburger({ onClick }) {
  return (
    <StyledMobileMenu>
      <ButtonIcon onClick={onClick}>
        <HiMenu />
      </ButtonIcon>
    </StyledMobileMenu>
  );
}

export default Hamburger;
