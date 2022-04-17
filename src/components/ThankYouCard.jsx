import React from 'react'
import styled from 'styled-components'
import { Heading, StyledCard } from './shared/sharedComponents'
import Illustration from '../assets/images/illustration-thank-you.svg'

const IllustartionContainer = styled.div``

const GradeResult = styled.div`
  background-color: ${props => props.theme.darkGrey};
  color: ${props => props.theme.orange};
  border-radius: 20px;
  padding: 0.2rem 0.5rem;
`
const StyledParagraph = styled.p`
  text-align: center;
`

const ThankYouCard = ({ grade }) => {
  return (
    <StyledCard thankyou>
      <IllustartionContainer>
        <img src={Illustration} alt='card payment device' />
      </IllustartionContainer>
      <GradeResult>You selected {grade} out of 5</GradeResult>
      <Heading>Thank you!</Heading>
      <StyledParagraph>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </StyledParagraph>
    </StyledCard>
  )
}

export default ThankYouCard
