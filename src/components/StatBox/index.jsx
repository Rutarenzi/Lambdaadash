import { Box, Typography } from "@mui/material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import Img from "../../assets/img/img-3.jpg";
import "./StatBox.css";


const StatBox=()=>{
    return(
        <Box sx={{
            background: "white",
            height: "15vh",
            borderRadius: "10px",
            padding: "10px 10px",
            display: "flex",
            alignItems:"center"

        }}>
           <Box  sx={{
             flexBasis: "33.33%",
             display: "flex",
             justifyContent:"center",
             alignItems: "center"
           }}>
              <Box sx={{
                background: "rgb(198, 255, 198)",
                marginRight : "15px",
                padding: "14px",
                borderRadius: "50%",
              }}>
                <PeopleOutlinedIcon 
                 sx={{
                    fontSize: "50px",
                    color: "rgb(47, 255, 47)"
                 }}
                />
              </Box> 
              <Box>
                <Typography sx={{
                    opacity: "0.5"
                }}>
                    Products
                </Typography>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "bold"
                }}
                >
                    5,423
                </Typography>
                <Typography>
                    <span style={{color: "green",fontWeight:"bold"}}>&uarr; 10%</span>
                    <span> Products</span> 
                </Typography>
              </Box>
           </Box>
           <Box  sx={{
             flexBasis: "33.33%",
             display: "flex",
             justifyContent:"center",
             alignItems: "center",
             borderLeft: "solid 1px rgb(248, 245, 245)",
             borderRight: "solid 1px rgb(248, 245, 245)",
           }}>
              <Box sx={{
                background: "rgb(198, 255, 198)",
                marginRight : "15px",
                padding: "14px",
                borderRadius: "50%",
              }}>
                <PeopleOutlinedIcon 
                 sx={{
                    fontSize: "50px",
                    color: "rgb(47, 255, 47)"
                 }}
                />
              </Box> 
              <Box>
                <Typography sx={{
                    opacity: "0.5"
                }}>
                    Products
                </Typography>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "bold"
                }}
                >
                    5,423
                </Typography>
                <Typography>
                    <span style={{color: "red",fontWeight:"bold"}}>&darr; 10%</span>
                    <span> Products</span> 
                </Typography>
              </Box>
           </Box>
           <Box  sx={{
             flexBasis: "33.33%",
             display: "flex",
             justifyContent:"center",
             alignItems: "center"
           }}>
              <Box sx={{
                background: "rgb(198, 255, 198)",
                marginRight : "15px",
                padding: "14px",
                borderRadius: "50%",
              }}>
                <PeopleOutlinedIcon 
                 sx={{
                    fontSize: "50px",
                    color: "rgb(47, 255, 47)"
                 }}
                />
              </Box> 
              <Box>
                <Typography sx={{
                    opacity: "0.5"
                }}>
                    Products
                </Typography>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "bold"
                }}
                >
                    5,423
                </Typography>
                <Box sx={{
                    height: "5vh",
                    display: "flex"
                }}>
                 
                <img
                      src={Img}
                      alt="Hello world"
                      className="ImgWrap"
                    />
                     <img
                      src={Img}
                      alt="Hello world"
                      className="ImgWrap"
                    />
                     <img
                      src={Img}
                      alt="Hello world"
                      className="ImgWrap"
                    />
                     <img
                      src={Img}
                      alt="Hello world"
                      className="ImgWrap"
                    />
            
             
                  
                </Box>
              </Box>
           </Box>
       </Box>

    )
}

export default StatBox;