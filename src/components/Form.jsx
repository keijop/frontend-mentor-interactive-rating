import React, { useState } from 'react'
import styled from 'styled-components'
import SubmitButton from './Button'

const StyledForm = styled.form`
  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media (min-width: 600px) {
    & > *:not(:last-child) {
      margin-bottom: 2.5rem;
    }
  }
`

const RadioButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const HiddenLabel = styled.label`
  border-width: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
`

const StyledRadioButton = styled.input`
  appearance: none;
  border-radius: 50%;
  background-color: ${props => props.theme.darkGrey};
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  &::before {
    content: '${props => props.grade}';
  }
  &:hover {
    background-color: ${props => props.theme.orange};
    color: ${props => props.theme.white};
  }
  &:checked {
    background-color: ${props => props.theme.lightGrey};
    color: ${props => props.theme.white};
  }

  @media (min-width: 900px) {
    height: 4rem;
    width: 4rem;
  }
`

const RadioButton = ({ grade, handleChange }) => {
  return (
    <>
      <HiddenLabel htmlFor={grade}>{grade}</HiddenLabel>
      <StyledRadioButton
        id={grade}
        grade={grade}
        type='radio'
        value={grade}
        name='grade'
        onChange={handleChange}
      />
    </>
  )
}

const grades = ['1', '2', '3', '4', '5']

const Form = ({ handleSubmit }) => {
  const [value, setValue] = useState(null)
  return (
    <StyledForm onSubmit={e => handleSubmit(e, value)}>
      <RadioButtonsContainer>
        {grades.map(grade => {
          return (
            <RadioButton
              key={grade}
              grade={grade}
              handleChange={e => setValue(e.target.value)}
            />
          )
        })}
      </RadioButtonsContainer>
      <SubmitButton />
    </StyledForm>
  )
}

export default Form
