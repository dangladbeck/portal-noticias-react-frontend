import MenuAdm from "../components/MenuAdm";
import useNoticia from "../hooks/useNoticia";

function TelaCadastroNoticia() {
    const {
        id, setId,
        data, setData,
        conteudo, setConteudo,
        cadastrarNoticia,
    } = useNoticia();

    return (
        <>
            <MenuAdm/>
            <h1>{/*noticia ? "Tela de Alteração de Notícia" : */"Tela de Cadastro de Notícia"}</h1>
        </>
    );
}

export default TelaCadastroNoticia;