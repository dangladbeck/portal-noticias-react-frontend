import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sobre from "./pages/Sobre";
import Adm from "./pages/Adm";
import TelaCadastroAdm from "./pages/TelaCadastroAdm";
import TelaListaAdm from "./pages/TelaListaAdm";
import TelaCadastroNoticia from "./pages/TelaCadastroNoticia";
import TelaListaNoticia from "./pages/TelaListaNoticia";

const rotas = createBrowserRouter(
    [
        {
            path: "/",
            Component: App,
            children: [
                {
                    index: true,
                    Component: Home
                },
                {
                    path: "/login",
                    Component: Login
                },
                {
                    path: "/sobre",
                    Component: Sobre
                },
                {
                    path: "/adm",
                    Component: Adm
                },
                {
                    path: "/telaCadastroAdm",
                    Component: TelaCadastroAdm
                },
                {
                    path: "/telaListaAdm",
                    Component: TelaListaAdm
                },
                {
                    path: "/telaCadastroNoticia",
                    Component: TelaCadastroNoticia
                },
                {
                    path: "/telaListaNoticia",
                    Component: TelaListaNoticia
                }
            ]
        }
    ]
);

export default rotas;