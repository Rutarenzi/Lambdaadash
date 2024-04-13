import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper"

const createData=(
 name,
 description,
 category,
 image,
 country,
 status
)=>{
  return {
    name,
    description,
    category,
    image,
    country,
    status}
}

const rows = [
    createData('Jacob James',"Yahoo","boots","image","Rwanda", "active"),
    createData('Jacob James',"Yahoo","boots","image","Rwanda", "active"),
    createData('Jacob James',"Yahoo","boots","image","Rwanda", "active"),
    createData('Jacob James',"Yahoo","boots","image","Rwanda", "active"),
    createData('Jacob James',"Yahoo","boots","image","Rwanda", "active"),
]

const TableComponent =()=>{
    return(
      <div>
        <TableContainer component={Paper}>
            <Table sx={{
                minWidth: 650
            }} arial-label>
                <TableHead>
                <TableRow>
                    <TableCell>
                        Product Name
                    </TableCell>
                    <TableCell >
                        Description
                    </TableCell>
                    <TableCell >
                        Category&nbsp;
                    </TableCell>
                    <TableCell>
                        Image&nbsp;
                    </TableCell>
                    <TableCell>
                        Country&nbsp;
                    </TableCell>
                    <TableCell>
                        status&nbsp;
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row)=>(
                        <TableRow
                        key={row.name}
                        sx={{'&:last-child td, &:last-child th':{border: 0}}}
                        >
                         <TableCell component="th" scope="row">
                             {row.name}
                         </TableCell>
                         <TableCell
                         >
                    {row.description}
                         </TableCell>
                         <TableCell
                         >
                    {row.category}
                         </TableCell>
                         <TableCell
                         >
                    {row.image}
                         </TableCell>
                         <TableCell
                         >
                    {row.country}
                         </TableCell>
                         <TableCell
                         >
                    {row.status}
                         </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      </div>
    )
}

export default TableComponent;