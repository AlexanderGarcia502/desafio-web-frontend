import React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface IDetails {
  name: string;
  quantity: number;
  price: number;
  subtotal: number;
}

export function createData(
  name: string,
  date: string,
  status: string,
  total: number,
  details: IDetails[]
) {
  return {
    name,
    date,
    status,
    total,
    details,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">{row.total}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>PRODUCTO</TableCell>
                    <TableCell>CANTIDAD</TableCell>
                    <TableCell align="right">PRECIO</TableCell>
                    <TableCell align="right">SUBTOTAL</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.details.map((historyRow) => (
                    <TableRow key={historyRow.name}>
                      <TableCell>{historyRow.name}</TableCell>
                      <TableCell component="th" scope="row">
                        {historyRow.quantity}
                      </TableCell>
                      <TableCell>{historyRow.price}</TableCell>
                      <TableCell align="right">{historyRow.subtotal}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default Row;
