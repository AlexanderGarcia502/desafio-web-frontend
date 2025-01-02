import { Stack } from "@mui/material";
import LoginSection from "../../organisms/login-form";
import React from "react";
import { ILoginTemplateProps } from "./interface";

const LoginTemplate: React.FC<ILoginTemplateProps> = ({ onSubmit }) => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        height: "100vh",
        background:
          "radial-gradient(circle, rgba(0,90,251,1) 0%, rgba(30,64,175,1) 100%, rgba(0,0,0,1) 100%)",
      }}
    >
      <LoginSection onSubmit={onSubmit} />;
    </Stack>
  );
};

export default LoginTemplate;
