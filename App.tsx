import React from "react";
import TabRoutes from "@/routes/TabRoutes";
import { Theme } from "@/theme/theme";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <TabRoutes />
    </ThemeProvider>
  );
}
