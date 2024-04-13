import { useState } from "react";
import {Sidebar, Menu, MenuItem,SubMenu} from "react-pro-sidebar";
import {Box,IconButton, Typography} from "@mui/material"
import { Link } from "react-router-dom";
import "./SideBar.css";
import LOGO from "../../../assets/img/img-3.jpg";
import CategoryOutlined from "@mui/icons-material/CategoryOutlined";
import DashboardCustomizeOutlined from "@mui/icons-material/DashboardCustomizeOutlined";
import ProductionQuantityLimitsOutlined from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import MonetizationOnOutlined from "@mui/icons-material/MonetizationOnOutlined"

const Item =({title, icon,selected,setSelected})=>{
  return (
    <MenuItem
    active={selected === title}
    style={{color:"black"}}
    onClick={()=>setSelected(title)}
    >
      <Typography>{title}</Typography>
      {/* <Link to={to}/> */}
    </MenuItem>
  )
}

const SideBar=()=>{
   
    const [isCollapsed,setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard') 
    return (
      <Box>
      <Box
       sx={{
            "& .ps-sidebar-container":{
             background: 'white !important',
             height: "100vh",  
         },
           
       }}
      >
      
     <Sidebar collapsed={isCollapsed} >
   
    <Menu iconShape="square">
           <MenuItem
            onClick={()=>setIsCollapsed(!isCollapsed)}
            icon={isCollapsed? <DashboardCustomizeOutlined/>: undefined}
            style={{
                margin:"10px 0 15px 0",
            }}
           >
            {!isCollapsed &&(
            <Box textAlign="center">
              {/* <img
                 alt="profile-user"
                 width="100px"
                 height="100px"
                 src={LOGO}
                 style={{cursor: "pointer",borderRadius: "50%"}}
                /> */}
            <Typography
            variant="h5"
            color="black"
            fontWeight="bold"
            sx={{ m: "10px 0 0 0"}}
            >
              Dashboard
            </Typography>
         </Box>
            )}

           </MenuItem>
          
           {/* MENU ITEMS */}
           <Box style={{marginBottom: "120px"}}>   
            <SubMenu label="Dashboard" icon={<DashboardCustomizeOutlined/>} sx={{
            
            }}></SubMenu>
            <SubMenu label="Products" icon={<ProductionQuantityLimitsOutlined/>} sx={{
            
          }}>
             <Item 
                title="All Products"
                selected={selected}
                setSelected={setSelected}
               />
          </SubMenu>
          <SubMenu label="Categories" icon={<CategoryOutlined/>} sx={{
            
          }}>
  
             <Item 
                title="All Categories"
                selected={selected}
                setSelected={setSelected}
               />
          </SubMenu>
          <SubMenu label="Income" icon={<MonetizationOnOutlined/>} sx={{
            
          }}>
          </SubMenu>
          <SubMenu label="Promote" icon={<CalendarTodayOutlinedIcon/>} sx={{
            
          }}>
            
          </SubMenu>
          <SubMenu label="Help" icon={<HelpOutlinedIcon/>} sx={{
            
         }}>
           
         </SubMenu>
                  
           </Box>
           
          
    
      { !isCollapsed &&  <Box sx=
      {{background: "grey",
       margin: "auto" ,
       height: "18vh", 
       width:"85%",
       borderRadius:"10px",
       textAlign:"center",
       alignItems: "center",
       padding: "10px",
       display: "flex",
       flexDirection: "column",
       justifyContent: "space-around"
       }}>
          <div className="TextPro">
          Upgrade to PRO to get access to features
          </div>
           <a className="ProBtn">
            Get Pro Now!
           </a>
      </Box> }
      <MenuItem
            style={{
                margin:"20px 0 30px 0",
            }}
           >
            {!isCollapsed &&(
            <Box sx={{
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between"
            }}>
             <Box sx={{
               display: "flex",
               alignItems: "center"
             }}>
                <img
                 alt="profile-user"
                 width="40px"
                 height="40px"
                 src={LOGO}
                 style={{
                  cursor: "pointer",
                  borderRadius: "50%",
                  marginRight: "10px"
               
               }}
                />
            <Typography
            variant="p"
            color="black"
            fontWeight="bold"
            sx={{ m: "10px 0 0 0",
            display: "flex",
            flexDirection: "column"
         }}
            >
              <span>Axcel</span>
              <span style={{fontSize: "12px", opacity: "0.7"}}>Project Manager</span>
            </Typography>
             </Box>
             <span>&uarr;</span>
         </Box>
            )}

           </MenuItem>
        </Menu>
     </Sidebar>
    </Box>
    </Box>
    )
}

export default SideBar;