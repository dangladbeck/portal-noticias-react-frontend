import { useState } from "react";
import { useNavigate } from "react-router";
import type Administrador from "../interfaces/Administrador";
import axios from "axios";

function useLogin() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const navigate = useNavigate();

    async function realizarLogin(evento:React.SubmitEvent<HTMLFormElement>) {
        evento.preventDefault();

        try {
            // Enviar os dados para o servidor
            const resposta = await axios.post("http://localhost:3000/login", {email, senha});
            setMensagem(resposta.data.mensagem);
            localStorage.setItem("usuarioLogado", "sim");
            localStorage.setItem("administradorLogado", JSON.stringify(resposta.data.administrador));
            setTimeout(() => {
                navigate("/adm");
            }, 1000);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setMensagem(error.response?.data?.mensagem);
            }
            else {
                setMensagem("Erro inesperado");
            }
        }



        /*const listaAdministradores = JSON.parse(localStorage.getItem("listaAdministradores") || "[]");

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
        }*/
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