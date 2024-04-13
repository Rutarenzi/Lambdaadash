import { Box,IconButton,Typography } from "@mui/material";
import {InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";



const TopBar=()=>{
    return(
   <Box  
    display="flex"
    justifyContent="space-between"
    p={2}
    sx={{
      margin: "auto",
      width: "85%"
    }}
   >

<Box
    display="flex"
    borderRadius="5px"
    >
      <Typography variant="h5" color= "black" fontWeight="bold" 
      >
      Hello , Axcel
      </Typography>
        
    </Box>
    <Box
    display="flex"
    backgroundColor="rgb(248, 245, 245)"
    borderRadius="5px"
    >
      <IconButton type="button" sx={{p:1}}>
        <SearchIcon />
      </IconButton>
      <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
    </Box>
   </Box>
    )
}

export default TopBar;