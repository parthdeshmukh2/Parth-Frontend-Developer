import { Box, Select } from '@chakra-ui/react'
import React from 'react'

const Filter = () => {
  return (
    <Box w='90%' m='auto' mt='16' bg='gray.900' display='grid' rounded='xl' gridTemplateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg:'repeat(3, 1fr)'}} gap='12' p='4'> 
        <Select placeholder='Filter By Status' bg='white'>
            <options></options>
            <options></options>
            <options></options>
            <options></options>
        </Select>

        <Select placeholder='Filter By Original Status' bg='white' >
            <options></options>
            <options></options>
            <options></options>
            <options></options>
        </Select>

        <Select placeholder='Filter By type' bg='white' >
            <options></options>
            <options></options>
            <options></options>
            <options></options>
        </Select>
      
    </Box>
  )
}

export default Filter
