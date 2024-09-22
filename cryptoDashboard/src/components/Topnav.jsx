import {    Button, Container, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaAngleDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import React from 'react'

const Topnav = () => {
  return (
    <HStack boxShadow="xl" h="16" pt="3" justify="space-between" px="16" >
        
            <Heading fontWeight="700" fontSize='28px' >
                DashBoard
            </Heading>
            <Menu>
            <MenuButton as={Button} rightIcon={<FaAngleDown />} fontSize='22px'>
            <Icon as={FaUser} />
            </MenuButton>
            <MenuList mt="3" >
                <MenuItem>Dashboard</MenuItem>
                <MenuItem>Transaction</MenuItem>
                
            </MenuList>
            </Menu>
    </HStack>
  )
}

export default Topnav
