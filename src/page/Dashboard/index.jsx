import {useState } from "react";
import StatBox from "../../components/StatBox";
import './Dashboard.css'
import { Box,IconButton,Modal,Typography } from "@mui/material";
import {InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TableComponent from "../../components/TableComponent";

const style = {
    position: 'absolute',
    top: '-10%',
    left: '50%',
    transform:'translate(-50%,50%)',
    width: "700px",
    bgcolor: 'background.paper',
    border:'2px solid #000',
    p: 4
}

const Dashboard=()=>{
    const [open,setOpen] = useState(false);
    const handleOpen =()=>setOpen(true);
    const handleClose=()=>setOpen(false)
    return(
        <>
             {/* //Model  */}
             <Modal 
             open={open}
             onClose={handleClose}
             arial-labelledby="modal-modal-title"
             aria-describedby="modal-modal-description"
             sx={{
                
             }}
             >
             <Box sx={style}>
               <Typography id="modal-modal-title" variant="h6" component="h2" sx={{
                borderLeft:"solid 4px red", paddingLeft: "10px"
               }}>
                  Add Product 
               </Typography>
               <Box id="modal-modal-description" sx={{
                mt:2,
                mb:2,
                display: "flex",
                flexWrap: "wrap",
                justifyContent:"space-between",
                
                }}>
                  <Box sx={{
                   flexBasis: "45%",
                   width: "50%"
                  }}>
                    <Typography>
                   Product Name 
               </Typography>
                  <InputBase sx={{ 
                     width: "100%", 
                     background: "rgb(248, 245, 245)", 
                     padding: "5px 10px", 
                     borderRadius:"8px",
                  }} placeholder="eg: Jeans" />
                  </Box>
                  <Box  sx={{
                    flexBasis: "45%",
                    width: "50%",
                    marginBottom:"20px"
                  }}>
                     <Typography>
                     Product Description
               </Typography>
                  <InputBase sx={{  width: "100%", 
                     background: "rgb(248, 245, 245)", 
                     padding: "5px 10px", 
                     borderRadius:"8px",
                     }} placeholder="Description" />
                  </Box>
                  <Box 
                   sx={{
                    flexBasis: "45%",
                    width: "90%"
                  }}
                  >
                     <Typography>
                     Product Image Url
               </Typography>
                  <InputBase sx={{
                     width: "100%", 
                     background: "rgb(248, 245, 245)", 
                     padding: "5px 10px", 
                     borderRadius:"8px",
                     
                     
                     }} placeholder="https://example.com/example.jpg" />
                  </Box>
               </Box>
               <Box sx={{display: "flex", justifyContent:"space-between" ,mb:4}}>
               <Box sx={{
                   flexBasis: "30%",
                   width: "50%"
                  }}>
                    <Typography>
                    Product Country 
               </Typography>
                  <InputBase sx={{ 
                     width: "100%", 
                     background: "rgb(248, 245, 245)", 
                     padding: "5px 10px", 
                     borderRadius:"8px",
                  }} placeholder="eg: Jeans" />
                  </Box>
                  <Box sx={{
                   flexBasis: "30%",
                   width: "50%"
                  }}>
                    <Typography>
                   Category
               </Typography>
                  <InputBase sx={{ 
                     width: "100%", 
                     background: "rgb(248, 245, 245)", 
                     padding: "5px 10px", 
                     borderRadius:"8px",
                  }} placeholder="eg: Jeans" />
                  </Box>
                  <Box sx={{
                   flexBasis: "30%",
                   width: "50%"
                  }}>
                    <Typography>
                   Tags 
               </Typography>
                  <InputBase sx={{ 
                     width: "100%", 
                     background: "rgb(248, 245, 245)", 
                     padding: "5px 10px", 
                     borderRadius:"8px",
                  }} placeholder="eg: Jeans" />
                  </Box>
               </Box>
               <a className="addCategory" onClick={handleClose}>Save Product</a>
             </Box>
             </Modal>


         <div className="Container-Dash">
           <StatBox />
           <div className="tableContainer">
            <div className="TableTop">
                <div>
                    <p style={{fontWeight: "bold", fontSize: "18px"}}>Products
                        <br></br>
                        <span style={{fontWeight: "bold", fontSize: "12px", opacity: "0.7", color: "green"}}>Available Products</span>
                    </p>
                    
                </div>
                <div className="InputContainer">
                <p className="AddBtn" onClick={handleOpen}>+</p>

                <Box
                  display="flex"
                  backgroundColor="rgb(248, 245, 245)"
                 borderRadius="5px"
                 sx={{
                    flexBasis : "40%"
                 }}
                >
               
              <IconButton type="button" sx={{p:1}}>
                 <SearchIcon />
              </IconButton>
              <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
               </Box>
               <form className="Form">
                <label id="selector">Sorted by</label>
                 <select For="selector">
                    <option>Newest</option>
                 </select>
               </form>
        </div>
            </div>
            <TableComponent />
        </div>
        </div>
        
        </>
       
    )
}

export default Dashboard