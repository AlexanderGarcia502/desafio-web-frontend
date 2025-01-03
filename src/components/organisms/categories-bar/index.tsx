import React, { useCallback, useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { ICategoriesBarProps, TCategoryInfo } from "./interface";
import RoundedButton from "../../atoms/buttons";

const CategoriesCarousel: React.FC<ICategoriesBarProps> = ({
  categories,
  onChangeCategory,
}) => {
  const [categoryIndex, setCategoryIndex] = useState<number>(0);
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

  const handleButtonClick = useCallback(
    (category: TCategoryInfo, index: number) => {
      setCategoryIndex(index);
      onChangeCategory && onChangeCategory(category);
    },
    []
  );

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
          <RoundedButton
            key={`category-${index}`}
            title={category.nombre}
            isSelected={index === categoryIndex}
            onClick={() => handleButtonClick(category, index)}
          />
        ))}
      </Box>

      <IconButton onClick={() => scroll("right")}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default CategoriesCarousel;
