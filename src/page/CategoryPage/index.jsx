import './CategoryPage.css';
import {useState } from "react";
import { Box,IconButton,Button,Modal,Typography } from "@mui/material";
import {InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TableComponent from "../../components/TableComponent";
import StatBoxCat from '../../components/StatBoxCat';
const style = {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform:'translate(-50%,50%)',
    width: "40%",
    bgcolor: 'background.paper',
    border:'2px solid #000',
    p: 4
}
const CategoryPage=()=>{
    const [open,setOpen] = useState(false);
    const handleOpen =()=>setOpen(true);
    const handleClose=()=>setOpen(false)
    return(
        <>
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
                  Add Category 
               </Typography>
               <Box id="modal-modal-description" sx={{
                mt:2,
                mb:4,
                display: "flex",
                flexWrap: "wrap",
                justifyContent:"space-between",
                
                }}>
                  <Box sx={{
                   flexBasis: "45%",
                   width: "50%"
                  }}>
                    <Typography>
                   Category Name 
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
                   Category Description
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
                   Category Image Url
               </Typography>
                  <InputBase sx={{
                     width: "100%", 
                     background: "rgb(248, 245, 245)", 
                     padding: "5px 10px", 
                     borderRadius:"8px",
                     
                     
                     }} placeholder="https://example.com/example.jpg" />
                  </Box>
               </Box>
               <a className="addCategory" onClick={handleClose}>Save Category</a>
             </Box>
             </Modal>
         <div className="Container-Dash">
           <StatBoxCat />
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

export default CategoryPage