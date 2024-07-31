import styled from 'styled-components';

const StyledMobileContainer = styled.div`
  display: block;
  @media (max-width: 600px) {
    display: none;
  }
`;
function MobileContainer({ children }) {
  return (
    <StyledMobileContainer>
      {children}
    </StyledMobileContainer>
  );
}

export default MobileContainer;
