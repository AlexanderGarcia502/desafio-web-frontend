import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { IProductCardProps } from "./interface";

export default function ProductCard({
  nombre,
  precio,
  foto,
  onClick,
}: IProductCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 223,
        maxHeight: 409,
        border: "1px solid #e0e0e0",
        borderRadius: 1,
        boxShadow: 2,
      }}
    >
      {/* Imagen del producto */}
      <CardMedia
        component="img"
        image={foto}
        alt="Banano"
        sx={{
          paddingTop: "35px",
          height: 140,
          width: 140,
          objectFit: "cover",
          margin: "0 auto",
        }}
      />

      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {nombre}
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          Q {precio}
        </Typography>
      </CardContent>

      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ShoppingCart />}
          onClick={onClick}
          sx={{ textTransform: "none" }}
        >
          Añadir
        </Button>
      </Box>
    </Card>
  );
}
