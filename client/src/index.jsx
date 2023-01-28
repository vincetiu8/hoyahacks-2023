import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { MantineProvider } from "@mantine/core";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
        headings: {
          fontFamily: "Ubuntu, sans-serif",
          sizes: {
            h1: {
              fontSize: 64,
            },
            h2: {
              fontSize: 48,
            },
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </React.StrictMode>
);
