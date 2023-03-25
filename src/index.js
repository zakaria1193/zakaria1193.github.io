import * as React from 'react';
import ReactDOM from "react-dom/client";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

// Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { createRoot } from 'react-dom/client';

// Pages
import Homepage from './components/homepage/Homepage';
import Learning from './components/learning/page';

// Theme
import { AppContainer, theme } from './Theme';

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
    path: "/learning",
    element: wrap(Learning)
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// --------------------------------------------------------------------------------------------
// Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvUuNNbxr-Ubt0rCKiBob9EgvrZZYGb7Q",
  authDomain: "personal-website-71663.firebaseapp.com",
  projectId: "personal-website-71663",
  storageBucket: "personal-website-71663.appspot.com",
  messagingSenderId: "873028455797",
  appId: "1:873028455797:web:a4208805c37a0345d7173c",
  measurementId: "G-DR9GEPHH39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
