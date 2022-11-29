import { Box, Button } from '@chakra-ui/react';
import React from 'react'


const Pagination = ({page, setPage}) => {

  return (
    <Box>
        <Box w='90%' m='auto' display='flex' gap='4' justifyContent='center' mt='16'>

 
        <Button disabled={page===1} onClick ={()=> setPage(page-1)}>Previous</Button>
        <Button onClick ={()=> setPage(1)}>1</Button>
        <Button onClick ={()=> setPage(2)}>2</Button>
        <Button onClick ={()=> setPage(3)}>3</Button>
        <Button disabled={page===3}onClick ={()=> setPage(page+1)}>Next</Button>
        </Box>

        </Box>
      
  
  )
}

export default Pagination