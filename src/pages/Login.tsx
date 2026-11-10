import useLogin from "../hooks/useLogin_pg";

function Login() {
    const {
        email, setEmail,
        senha, setSenha,
        mensagem, setMensagem,
        realizarLogin
    } = useLogin();
    
    
    return (
        <>
            <h1 className="destaque">Formulário de Login</h1>
            <main id="conteudoPrincipal">
                <div id="divMensagem" role="alert">{mensagem}</div>
                <form id="formLogin" onSubmit={realizarLogin}>
                    <div>
                        <label htmlFor="txtEmail">E-mail</label>
                        <br/>
                        <input type="email" id="txtEmail" required value={email} onChange={(evento) => {
                            setEmail(evento.target.value)
                        }}/> 
                    </div>
                    <div>
                        <label htmlFor="txtSenha">Senha</label>
                        <br/>
                        <input type="password" id="txtSenha" required value={senha} onChange={(evento) => {
                            setSenha(evento.target.value)
                        }}/>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </main>            
        </>
    );
}

export default Login