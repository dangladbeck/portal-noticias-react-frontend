import { Link } from "react-router";

function MenuAdm() {
    return (
        <>
            <h1 className="destaque">Área Administrativa</h1>
            <nav className="menu">
                <p>
                    <Link to="/telaCadastroAdm" className="botao-menu">Cadastro de Administrador</Link>
                    <Link to="/telaListaAdm" className="botao-menu">Lista de Administradores</Link>
                    <Link to="/telaCadastroNoticia" className="botao-menu">Cadastro de Notícia</Link>
                    <Link to="/telaListaNoticia" className="botao-menu">Lista de Notícias</Link>
                </p>
            </nav>
        </>
    );
}

export default MenuAdm;