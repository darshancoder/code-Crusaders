import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

const Alertbox = (props) => {
    const{data}=props;
  return (
    <div>

<Alert status='success' variant='solid'  flexDirection='column'
alignItems='center'
justifyContent='center'
textAlign='center'
height='60px'
w="12%"
m="auto"
mt="20px">
    <AlertIcon />
    {data}
  </Alert>
    </div>
  )
}

export default Alertbox