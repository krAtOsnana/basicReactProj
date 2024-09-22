import React from 'react'
import { Box, HStack, Heading, Icon, Stack, Text} from "@chakra-ui/react"
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { PiCurrencyEthFill } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";




const Sidenav = () => {

    const navLink = [
        {
            icon: MdDashboard,
            text: "Dashboard",
            link: "/"
        },
        {
            icon: GrTransaction,
            text: "Transactions",
            link: "/transactions"
        }
    ]

  return (
    <Stack 
    maxW="270px"
    h="100vh"
    boxShadow="lg"
    justify="space-between"
    >
        <Box>
        <HStack alignItems="center" spacing="0.5" pt="5" pb="2"  pl="4" >
        <PiCurrencyEthFill  fontSize="30px"  />
        <Heading as="h1" fontSize="25px"  textDecoration="underline"  
        textUnderlineOffset="3px" fontWeight="700" mx="3" 
        > ᴄʀᴀᴘᴘʏ ᴄʀʏᴘᴛᴏ</Heading>   
        </HStack>
        
        <Box mt="3" mx="3" >
        {
        navLink.map((items)=>(
            <HStack 
            borderRadius="10px"
            maxW="250px"
            key={items.text}
            boxShadow="md"
            alignContent="center" 
            color="#718096"
            my="3"
            py="3"
            px="4"
            fontSize="25px"
            _hover={{
                bg:"#F3F3F7",
                color:"#171717",
                scale:"110%",
            }}>
                <Icon as={items.icon}/>
                <Text fontSize="16px"  fontWeight="500" >{items.text}</Text>
            </HStack>
        ))
        }
        </Box>    
        </Box>
        

        <HStack 
            borderRadius="10px"
            maxW="250px"
            mx="3"
            boxShadow="md"
            alignContent="center" 
            color="#718096"
            my="3"
            py="3"
            px="4"
            mb="8"
            fontSize="25px"
            _hover={{
                bg:"#F3F3F7",
                color:"#171717",
                scale:"110%",
            }}>
                <BiSupport />
                <Text fontSize="14px" >Support</Text>
        </HStack>

       </Stack>
  )
}

export default Sidenav
