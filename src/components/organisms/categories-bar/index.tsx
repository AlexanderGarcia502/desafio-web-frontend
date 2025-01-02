import { useRef } from "react";
import { Box, Icon, IconButton } from "@mui/material";
import {
  LocalDining,
  CleaningServices,
  Pets,
  HealthAndSafety,
  Icecream,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import IconButtonWithText from "../../molecules/Icon-button-with-text";
import CategoryIcon from '@mui/icons-material/Category';

const categories = [
  { icon: <CategoryIcon fontSize="large" />, label: "Alimentos y Bebidas" },
  {
    icon: <CategoryIcon fontSize="large" />,
    label: "Productos de Limpieza",
  },
  { icon: <CategoryIcon fontSize="large" />, label: "Cuidado de Mascotas" },
  { icon: <CategoryIcon fontSize="large" />, label: "Farmacia y Salud" },
  { icon: <CategoryIcon fontSize="large" />, label: "Alimentos Congelados" },
];

export default function CategoriesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        marginY: { xs: 3, md: 4 },
      }}
    >
      {/* Flecha Izquierda */}
      <IconButton onClick={() => scroll("left")}>
        <ArrowBackIos />
      </IconButton>

      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: 2,
          padding: 1,
          width: "100%",
          justifyContent: "space-between",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {categories.map((category, index) => (
          <IconButtonWithText
            key={index}
            icon={category.icon}
            text={category.label}
            variantText="body2"
            sxText={{ marginTop: 1 }}
            sx={{
              flex: "0 0 auto",
              textAlign: "center",
              width: { xs: 80, md: 120 },
              cursor: "pointer",
            }}
          />
        ))}
      </Box>

      <IconButton onClick={() => scroll("right")}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
}
