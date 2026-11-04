import { useLocation } from "react-router";
import MenuAdm from "../components/MenuAdm";
import useNoticia from "../hooks/useNoticia";
import { useEffect } from "react";

function TelaCadastroNoticia() {
    const {
        id, setId,
        titulo, setTitulo,
        data, setData,
        conteudo, setConteudo,
        mensagem, setMensagem,
        cadastrarNoticia,
        alterarNoticia
    } = useNoticia();

    const location = useLocation();
    const noticia = location.state?.noticia;
    useEffect(() => { // executado no carregamento da página
        if (noticia) {
            setId(noticia.id);
            setTitulo(noticia.titulo)
            setData(noticia.data);
            setConteudo(noticia.conteudo);
        }
        else {
            setId("");
            setTitulo("");
            setData("");
            setConteudo("");
        }
    }, [noticia]);

    return (
        <>
            <MenuAdm/>
            <h1>{noticia ? "Tela de Alteração de Notícia" : "Tela de Cadastro de Notícia"}</h1>
            <main id="conteudoPrincipal">
                <div id="divMensagem" role="alert">{mensagem}</div>
                <form id="formCadastroAdm" onSubmit={(event) => {
                    noticia ? alterarNoticia(event, noticia.id) : cadastrarNoticia(event);
                }}>
                    <div>
                        <input type="hidden" id="txtId" value={id} onChange={(e) => {setId(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="txtTitulo">Título</label>
                        <br/>
                        <input type="text" id="txtTitulo" required value={titulo} onChange={(e)=>{setTitulo(e.target.value)}} /> 
                    </div>
                    <div>
                        <label htmlFor="txtData">Data</label>
                        <br/>
                        <input type="date" id="txtData" required value={data} onChange={(e)=>{setData(e.target.value)}} /> 
                    </div>
                    <div>
                        <label htmlFor="txtConteudo">Conteúdo</label>
                        <br/>
                        <textarea id="txtConteudo" rows={7} cols={100} required value={conteudo} onChange={(e)=>{setConteudo(e.target.value)}}></textarea> 
                    </div>
                    <button type="submit">{noticia ? "Alterar" : "Cadastrar"}</button>
                </form>
            </main>
        </>
    );
}

export default TelaCadastroNoticia;