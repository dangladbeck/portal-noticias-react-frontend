import { useState } from "react";
import { useNavigate } from "react-router";
import type Noticia from "../interfaces/Noticia";

function useNoticia() {
    const [id, setId] = useState("");
    const [titulo, setTitulo] = useState("");
    const [data, setData] = useState("");
    const [conteudo, setConteudo] = useState("");
    const [mensagem, setMensagem] = useState("");
    const navigate = useNavigate();

    function cadastrarNoticia(event:React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        
    }

    function limparCampos() {
        setId("");
        setTitulo("");
        setData("");
        setConteudo("");
        setMensagem("");
    }

    function buscarNoticia(): Noticia[] {
        const listaNoticias = JSON.parse(localStorage.getItem("listaNoticias") || "[]");
        return listaNoticias;
    }

    function excluirNoticia(id:string) {
        
    }

    function alterarNoticia(event:React.SubmitEvent<HTMLFormElement>, id:string) {
        event.preventDefault();

        
    }


    return ({
        id, setId,
        titulo, setTitulo,
        data, setData,
        conteudo, setConteudo,
        mensagem, setMensagem,
        cadastrarNoticia,
        buscarNoticia,
        excluirNoticia,
        alterarNoticia
    });
}

export default useNoticia;