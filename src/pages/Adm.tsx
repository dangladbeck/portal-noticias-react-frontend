import { useEffect } from "react";
import MenuAdm from "../components/MenuAdm";
import useLogin from "../hooks/useLogin";

function Adm() {
    const {verificarUsuarioLogado} = useLogin();
    // useEffect é executado no carregamento da página somente
    useEffect(() => {
        verificarUsuarioLogado();
    }, []);

    return (
        <>
            <main id="conteudoPrincipal">
                <MenuAdm/>
            </main>
        </>
    );
}

export default Adm;