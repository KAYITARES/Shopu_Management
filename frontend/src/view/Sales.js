import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getSalesActions } from "../redux/sales/actions";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const ViewComponent = (props) => {
  const dispatch = useDispatch();
  const { sales, isFetching } = useSelector((state) => state?.sale);
  useEffect(() => {
    getSalesActions()(dispatch);
  }, []);
  console.log(sales);

  return (
    <>
      <h1> Test Sales View</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>N0</StyledTableCell>
              <StyledTableCell align="right">Product-Name</StyledTableCell>
              <StyledTableCell align="right">quantity</StyledTableCell>
              <StyledTableCell align="right">price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sales.map((row, index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.product.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                {/* <StyledTableCell align="right">{row.email}</StyledTableCell> */}
                {/* <StyledTableCell align="right">
                  {row.isActive ? "available" : "not available"}
                </StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ViewComponent;
