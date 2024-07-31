import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  from {
    transform: translate(100%, 0px)
  }
`;

const StyledMenu = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    height: 60vh;
    position: absolute;
    top: 0rem;
    right: 0.2rem;
    width: 30rem;
    background-color: var(--color-grey-100);
    z-index: 99;
    box-shadow: var(--shadaow-lg);
    border-radius: 0px 0px 0px 10px;
    animation: ${slide} 0.4s ease;
  }
`;

function MobileMenu() {
  return (
    <div
      style={{
        backgroundColor: 'var(--backdrop-color)',
        height: '100vh',
        minWidth: '100vw',
        position: 'absolute',
        top: '5rem',
        left: '0px',
        zIndex: 100,
      }}
    >
      <StyledMenu>MobileMenu</StyledMenu>
    </div>
  );
}

export default MobileMenu;
