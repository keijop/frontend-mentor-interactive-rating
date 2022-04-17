import styled from 'styled-components'

export const StyledCard = styled.main`
  background: linear-gradient(
    ${props => props.theme.darkBlue},
    ${props => props.theme.darkerBlue}
  );
  width: 85vw;
  height: 90vw;
  border-radius: 15px;
  padding: 1rem;
  color: ${props => props.theme.mediumGrey};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: ${props => (props.thankyou ? 'center' : '')};

  @media (min-width: 600px) {
    width: 60vw;
    height: 75vw;
  }

  @media (min-width: 900px) {
    width: 30vw;
    height: 30vw;
  }
`

export const Heading = styled.h1`
  color: ${props => props.theme.white};
`
export const Circle = styled.div`
  border-radius: 50%;
  background-color: ${props => props.theme.darkGrey};
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    height: 4rem;
    width: 4rem;
  }
`
