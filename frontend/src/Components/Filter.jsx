import { Box, Select } from '@chakra-ui/react'
import React from 'react'
import axios from "axios";

const Filter = ( {setData}) => {

const handleOriginalStatus = (value) => {
    console.log(value);
axios.get(`https://api.spacexdata.com/v3/capsules?original_launch=${value}`)
.then((res)=> setData(res.data))
.catch((err)=> console.log(err))

}
const handleStatus = (value) => {
    console.log(value);
    axios.get(`https://api.spacexdata.com/v3/capsules?status=${value}`)
    .then((res)=> setData(res.data))
    .catch((err)=> console.log(err))

}
const handleType = (value) => {
    console.log(value);
    axios.get(`https://api.spacexdata.com/v3/capsules?type=${value}`)
    .then((res)=> setData(res.data))
    .catch((err)=> console.log(err))

}

  return (
    <Box w='90%' m='auto' mt='16' bg='gray.900' display='grid' rounded='xl' gridTemplateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg:'repeat(3, 1fr)'}} gap='12' p='4'> 
        <Select placeholder='Filter By Status' bg='white' onChange={(e)=> handleStatus(e.target.value)}>
            <option value='active'>Active</option>
            <option value='destroyed'>Destroyed</option>
            <option value='retired'>Retired</option>
            <option value='unknown'>Unknown</option>
        </Select>

        <Select placeholder='Filter By Original Status' bg='white' onChange={(e)=> handleOriginalStatus(e.target.value)}>
            <option value='2012-10-08T00:35:00.000Z'>Launched Till Date</option>
            <option value='null'>Yet To Launch</option>
          
        </Select>

        <Select placeholder='Filter By type' bg='white' onChange={(e)=> handleType(e.target.value)} >
            <option value="Dragon 1.0">Dragon 1.0</option>
            <option value="Dragon 1.1">Dragon 1.1</option>
            <option value="Dragon 2.0">Dragon 2.0</option>
            
        </Select>
      
    </Box>
  )
}

export default Filter
