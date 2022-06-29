import React from 'react'
import styled from 'styled-components'

const HelloWorld = () => {
  return (
    <div>
        <Heading> Hello World </Heading>
    </div>
  )
}

const Heading = styled.h1`
    font-weight: 500;
    font-size: 25px;
    padding-bottom: 1rem;
`;

export default HelloWorld
