import { useLocation } from "react-router";
import MenuAdm from "../components/MenuAdm";
import useAdministrador from "../hooks/useAdministrador";
import { useEffect } from "react";
import useLogin from "../hooks/useLogin";

function TelaCadastroAdm() {
    const {verificarUsuarioLogado} = useLogin();

    const {
        id, setId,
        nome, setNome,
        email, setEmail,
        senha, setSenha,
        mensagem, setMensagem,
        cadastrarAdministrador,
        alterarAdministrador
    } = useAdministrador();

    const location = useLocation();
    const adm = location.state?.adm;
    useEffect(() => { // executado no carregamento da página
        verificarUsuarioLogado();

        if (adm) {
            setId(adm.id);
            setNome(adm.nome);
            setEmail(adm.email);
            setSenha(adm.senha);
        }
        else {
            setId("");
            setNome("");
            setEmail("");
            setSenha("");
        }
    }, [adm]);

    return (
        <>
            <MenuAdm/>
            <h1>{adm ? "Tela de Alteração de Administrador" : "Tela de Cadastro do Administrador"}</h1>
            <main id="conteudoPrincipal">
                <div id="divMensagem" role="alert">{mensagem}</div>
                <form id="formCadastroAdm" onSubmit={(event) => {
                    adm ? alterarAdministrador(event, adm.id) : cadastrarAdministrador(event);
                }}>
                    <div>
                        <input type="hidden" id="txtId" value={id} onChange={(e) => {setId(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="txtNome">Nome</label>
                        <br/>
                        <input type="text" id="txtNome" required value={nome} onChange={(e)=>{setNome(e.target.value)}} /> 
                    </div>
                    <div>
                        <label htmlFor="txtEmail">E-mail</label>
                        <br/>
                        <input type="email" id="txtEmail" required value={email} onChange={(e)=>{setEmail(e.target.value)}} /> 
                    </div>
                    <div>
                        <label htmlFor="txtSenha">Senha</label>
                        <br/>
                        <input type="password" id="txtSenha" required value={senha} onChange={(e)=>{setSenha(e.target.value)}} />
                    </div>
                    <button type="submit">{adm ? "Alterar" : "Cadastrar"}</button>
                </form>
            </main>
        </>
    );
}

export default TelaCadastroAdm;