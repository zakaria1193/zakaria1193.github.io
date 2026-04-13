import * as React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Homepage from "./components/homepage/Homepage";
import Cv from "./components/cv/Page";

// Theme
import { AppContainer, theme } from "./Theme";

const wrap = (Component) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        <Component />
      </AppContainer>
    </ThemeProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: wrap(Homepage),
  },
  {
    path: "/cv",
    element: wrap(Cv),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

