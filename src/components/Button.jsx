import styled from 'styled-components'

const StyledButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 25px;
  background-color: ${props => props.theme.orange};
  color: ${props => props.theme.white};
  border: none;
  box-shadow: none;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.orange};
  }
  @media (min-width: 900) {
    padding: 1.4rem;
  }
`

const SubmitButton = () => {
  return <StyledButton type='submit'>submit</StyledButton>
}

export default SubmitButton
