import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routes/routing";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  // your theme configuration
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Routing />
    </Router>
  </ThemeProvider>
);

export default App;
