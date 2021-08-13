import React from 'react'
import styled from 'styled-components'
import { ShoePage, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return (
    <main>
      <ShoePage title='checkout' />
      <Wrapper className='page'>
        <h1>Checkout Here</h1>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div``
export default CheckoutPage
