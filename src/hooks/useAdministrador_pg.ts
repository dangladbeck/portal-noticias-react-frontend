import { useState } from "react";
import type Administrador from "../interfaces/Administrador";
import { useNavigate } from "react-router";
import axios from "axios";

function useAdministrador() {
    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const navigate = useNavigate();    
    const API = "http://localhost:3000/administradores"; // endereço da API
    
    async function cadastrarAdministrador(event:React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            // Enviar os dados para o servidor
            const resposta = await axios.post("http://localhost:3000/login", {email, senha});
            setMensagem(resposta.data.mensagem);
        } catch (error) {
            
        }

        /*const administrador:Administrador = {id: crypto.randomUUID(), nome, email, senha};

        const listaAdministradores = JSON.parse(localStorage.getItem("listaAdministradores") || "[]");
        listaAdministradores.push(administrador);
        localStorage.setItem("listaAdministradores", JSON.stringify(listaAdministradores));
        setMensagem("Administrador cadastrado com sucesso!");
        setTimeout(() => {
            limparCampos();
        }, 2000);*/
    }

    function limparCampos() {
        setId("");
        setNome("");
        setEmail("");
        setSenha("");
        setMensagem("");
    }
    
    async function buscarAdministradores() : Promise<Administrador[]> {
        try {
            const resposta = await axios.get(API);
            return resposta.data;
        } catch (error) {
            console.log(error);
            setMensagem("Erro ao listar administradores : " + error);
            return [];
        }
        
    }

    function excluirAdministrador(id:string) {
        const listaAdministradores = buscarAdministradores();
        const novaLista = listaAdministradores.filter((adm) => adm.id != id);
        localStorage.setItem("listaAdministradores", JSON.stringify(novaLista));
    }

    function alterarAdministrador(event:React.SubmitEvent<HTMLFormElement>, id:string) {
        event.preventDefault();

        const listaAdministradores = buscarAdministradores();
        const novaLista = listaAdministradores.map((adm) => {
            if (adm.id == id) {
                return {id, nome, email, senha};
            }
            return adm;
        });
        localStorage.setItem("listaAdministradores", JSON.stringify(novaLista));
        setMensagem("Administrador atualizado com sucesso!");
        setTimeout(() => {
            navigate("/telaListaAdm");
        }, 2000);
    }
    
    return ({
        id, setId,
        nome, setNome,
        email, setEmail,
        senha, setSenha,
        mensagem, setMensagem,
        cadastrarAdministrador,
        buscarAdministradores,
        excluirAdministrador,
        alterarAdministrador
    });
}

export default useAdministrador;