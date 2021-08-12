import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return ( 
    <Wrapper className='page-100'>
      <section>
        <h1>404 PAGE NOT FOUND</h1>
        <h4>Sorry, The Page You Are Looking For Cannnot Be Found</h4>
        <Link to='/' className='btn'>
          Home Page
        </Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h4 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage

