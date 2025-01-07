import * as React from "react";

import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { IProductLargeCard } from "./interface";

export default function ProductLargeCard({
  name,
  image,
  quantity,
  price,
  subtotal,
}: IProductLargeCard) {
  return (
    <ListItem alignItems="flex-start" sx={{ width: 500 }}>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={`data:image/png;base64,${image}`} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <React.Fragment>
            <Stack direction="column">
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                Cantidad: {`${quantity}`}
              </Typography>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                Precio: {`${price}`}
              </Typography>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                Subtotal: {`${subtotal}`}
              </Typography>
            </Stack>
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
