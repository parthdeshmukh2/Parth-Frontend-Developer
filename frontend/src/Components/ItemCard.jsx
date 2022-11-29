import { Box, Button, Image, Text, useDisclosure,  Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, } from '@chakra-ui/react'
import React, { useState } from 'react';
import SpaceXfalcon from "../Assets/SpaceXfalcon.jpg"


const ItemCard = (elem) => {
    const [modal, setModal] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleModal = (item) => {
        console.log(item)
        setModal(true);
     
    }
  return (
    <Box display='flex' flexDirection='column' boxShadow='xl' borderRadius='xl' p='4' bg='white'>
        <Box h='50%' w='100%' m='auto'  >
            <Image borderRadius='xl' w='100%' h='100%' src={SpaceXfalcon} />
        </Box>

        <Box display='flex' flexDirection='column'>
            <Text fontSize='xl' fontWeight='400' color='black' ><b>Name: </b>{elem.capsule_id}</Text>
            <Text fontSize='xl' fontWeight='400' color='black' ><b>Launced On:</b> {elem.original_launch}</Text>
            <Text fontSize='xl' fontWeight='400' color='black' ><b>Status:</b> {elem.status}</Text>
            <Text fontSize='xl' fontWeight='400' color='black' ><b>Type: </b>{elem.type}</Text>
            <Text fontSize='xl' fontWeight='400' color='black' ><b>Total Landings:</b> {elem.landings} </Text>

          

        </Box>
        <Button mt='4' bg='red' color='white' onClick={handleModal} >Show More</Button>

        {modal && 
        <Modal isOpen={true} onClose={()=>onClose(setModal(!modal))}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           
          <Box h='50%' w='100%' m='auto'  >
            <Image borderRadius='xl' w='100%' h='100%' src={SpaceXfalcon} />
        </Box>

        <Box display='flex' flexDirection='column'>
            <Text fontSize='xl' fontWeight='400' color='black' ><b>Name: </b>{elem.capsule_id}</Text>
            <Text fontSize='xl' fontWeight='400' color='black' ><b>Launced On:</b> {elem.original_launch}</Text>
            <Text fontSize='xl' fontWeight='400' color='black' ><b>Status:</b> {elem.status}</Text>
            <Text fontSize='xl' fontWeight='400' color='black' ><b>Type: </b>{elem.type}</Text>
            <Text fontSize='xl' fontWeight='400' color='black' ><b>Total Landings:</b> {elem.landings} </Text>

          

        </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=>onClose(setModal(!modal))}>
              Close
            </Button>
          
          </ModalFooter>
        </ModalContent>
      </Modal>
      
        }
      
    </Box>
  )
}

export default ItemCard