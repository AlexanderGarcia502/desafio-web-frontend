import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Row, { createData } from "./HistoryTable";
import { Close } from "@mui/icons-material";
import { theme } from "../../../theme/theme";

export default function CollapsibleTable({
  rows = [],
  onClose,
}: {
  rows: ReturnType<typeof createData>[];
  onClose: () => void;
}) {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 900,
        paddingX: { xs: 0, sm: 5 },
        paddingY: 3,
        maxHeight: 800,
        overflowY: "auto",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          marginBottom: 1,
          display: "flex",
          direction: "row",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            direction: "row",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" color="text.primary" fontWeight="bold">
            Historial
          </Typography>
        </Box>
        <IconButton aria-label="expand row" size="small" onClick={onClose}>
          <Close />
        </IconButton>
      </Box>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ORDEN</TableCell>
            <TableCell align="right">
              {isMobile ? "ENTREGA" : "FECHA DE ENTREGA"}
            </TableCell>
            <TableCell align="right">ESTADO</TableCell>
            <TableCell align="right">TOTAL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
