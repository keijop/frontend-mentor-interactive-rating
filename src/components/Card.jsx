import React from 'react'
import { Circle, Heading, StyledCard } from './shared/sharedComponents'
import Form from './Form'
import Star from '../assets/images/icon-star.svg'

const Card = ({ setGrade }) => {
  const handleSubmit = (e, value) => {
    e.preventDefault()
    setGrade(value)
  }

  return (
    <StyledCard>
      <Circle>
        <img src={Star} alt='star' />
      </Circle>
      <Heading>How did we do?</Heading>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Form handleSubmit={handleSubmit} />
    </StyledCard>
  )
}

export default Card
