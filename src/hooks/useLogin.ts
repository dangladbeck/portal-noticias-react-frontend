import { useState } from "react";
import { useNavigate } from "react-router";
import type Administrador from "../interfaces/Administrador";

function useLogin() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const navigate = useNavigate();

    function realizarLogin(evento:any) {
        evento.preventDefault();

        const listaAdministradores = JSON.parse(localStorage.getItem("listaAdministradores") || "[]");

        const admin = listaAdministradores.find(
            (adm:Administrador) => (adm.email == email && adm.senha == senha)
        );

        if (admin) {
            setMensagem("Login realizado com sucesso!");
            localStorage.setItem("usuarioLogado", "sim");
            setTimeout(() => {
                navigate("/adm");
            }, 1000);
        }
        else {
            setMensagem("e-Mail ou senha incorretos ");
        }
    }

    function realizarLogout() {
        localStorage.removeItem("usuarioLogado");
    }

    function verificarUsuarioLogado() {
        const usuarioLogado = localStorage.getItem("usuarioLogado");
        if (usuarioLogado != "sim") {
            navigate("/login");
        }
    }

    return (
        {
            email, setEmail,
            senha, setSenha,
            mensagem, setMensagem,
            realizarLogin, realizarLogout,
            verificarUsuarioLogado
        }
    );
}

export default useLogin;