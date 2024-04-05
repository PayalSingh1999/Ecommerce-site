import React from 'react'
import errorImage from '../../images/error.jpg'
import { ErrorWrapper } from './Error.styled'

const Error = () => {
  return (
    <ErrorWrapper>
      <div className='error__container'>
        <img src={errorImage} alt="error-img" />
      </div>
    </ErrorWrapper>
  )
}

export default Error