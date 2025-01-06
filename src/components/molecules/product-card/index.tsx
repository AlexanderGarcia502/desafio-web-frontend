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
  stock,
  onClick,
}: IProductCardProps) {
  return (
    <Card
      sx={{
        width: { xs: 150, sm: 223 },
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
          width: { xs: 100, sm: 140 },
          objectFit: "cover",
          margin: "0 auto",
        }}
      />

      <CardContent>
        <Typography variant="body1" fontWeight="bold">
          {nombre}
        </Typography>
        <Typography variant="inherit" fontWeight="bold">
          Q {precio}
        </Typography>
      </CardContent>

      {stock < 1 ? (
        <Box display="flex" justifyContent="center">
          <Typography variant="body1" fontWeight="bold" color="red">
            No disponible
          </Typography>
        </Box>
      ) : (
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
      )}
    </Card>
  );
}
