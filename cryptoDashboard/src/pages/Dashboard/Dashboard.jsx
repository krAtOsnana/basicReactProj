import { Box, Flex } from "@chakra-ui/react"
import Sidenav from "../../components/Sidenav"
import Topnav from "../../components/Topnav"

 
function Dashboard() {
  return (
    <div>
        <Flex>
        <Sidenav/> 
        <Box flexGrow="1">
        <Topnav/>    
        </Box>
        
        </Flex>
      
    </div>
  )
}

export default Dashboard
