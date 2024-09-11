import React from 'react'
import { Container } from 'react-bootstrap'
import notFound from "../img/notFound.jpeg"
import { useNavigate } from 'react-router'

const NotFound = () => {

  const navigatee = useNavigate()

  return (
    <Container className='text-center'>
      <img src={notFound} alt="" width="500px" />
      <button onClick={() => navigatee("/")} className='btn btn-info'>GO HOME</button>
    </Container>
  )
}

export default NotFound