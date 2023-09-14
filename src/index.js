import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './Dashboard';
import CadastroUsuario from "./pages/CadastroUsuario";
import ErroPage from './pages/ErroPage';
import App from './pages/App';
import CadastroProduto from './pages/CadastroProduto';
import "./App.css";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f304ed',
      light: '#fd3af8',
      dark: '#ad05a8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#bb0566',
      light: '#c53682',
      dark: '#85054a',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ff1d0e',
      light: '#f9483c',
      dark: '#b91509',
      contrastText: '#ffffff',
    },
    info: {
      main: '#20b1f3',
    },
    success: {      main: '#1abd21',
    },
    text: {
      primary: '#000000',
      secondary: 'rgba(255,255,255,0.7)',
      disabled: 'rgba(255,255,255,0.5)',
    },
    background: {
      default: '#000000',
      paper: '#181818',
    },
    divider: 'rgba(255,255,255,0.12)',
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErroPage />
  },
  {
    path: "/cadastro",
    element: <CadastroUsuario />,
    errorElement: <ErroPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children:[
      {
        path: "produtos",
        element: <App />
      },
      {
        path: "cadastro/produto",
        element: <CadastroProduto />
      },
      {
        path: "editar/produto/:id",
        element: <CadastroProduto />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
