import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { Delete, Add, Remove } from "@mui/icons-material";
import { IProductItemProps } from "./interface";

const ProductItem: React.FC<IProductItemProps> = ({
  image,
  title,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <Stack
      direction="row"
      width={1}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <img
          src={image}
          alt={title}
          style={{
            width: 50,
            height: 50,
            objectFit: "cover",
            borderRadius: 4,
          }}
        />
      </Box>

      <Stack
        spacing={1}
        direction="column"
        width={1}
        useFlexGap
        justifyContent="space-between"
        alignItems="center"
        marginLeft={2}
        marginRight={4}
        sx={{ flexWrap: "wrap" }}
      >
        <Box sx={{ width: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        </Box>
        <Stack
          width={1}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <IconButton size="small" onClick={onDecrease}>
              <Remove fontSize="small" />
            </IconButton>
            <Typography variant="body2">{quantity}</Typography>
            <IconButton size="small" onClick={onIncrease}>
              <Add fontSize="small" />
            </IconButton>
          </Box>

          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Q {(price * quantity).toFixed(2)}
          </Typography>
        </Stack>
      </Stack>
      <IconButton size="small" color="error" onClick={onRemove}>
        <Delete />
      </IconButton>
    </Stack>
  );
};

export default ProductItem;
