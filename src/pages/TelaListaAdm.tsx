import { useState } from "react";
import MenuAdm from "../components/MenuAdm";
import useAdministrador from "../hooks/useAdministrador";
import { useNavigate } from "react-router";

function TelaListaAdm() {

    const {buscarAdministradores, excluirAdministrador} = useAdministrador();
    const [listaAdministradores, setListaAdministadores] = useState(buscarAdministradores());
    const navigate = useNavigate();

    return(
        <>
            <MenuAdm/>
            <main id="conteudoPrincipal">
                <h1>Lista de Administradores</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>e-Mail</th>
                            <th colSpan={2}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaAdministradores.map((adm) => (
                            <tr key={adm.id}>
                                <td>{adm.nome}</td>
                                <td>{adm.email}</td>
                                <td><button onClick={()=>{
                                    navigate("/telaCadastroAdm", {state: {adm}});
                                }}>Alterar</button></td>
                                <td>
                                    <button onClick={()=>{
                                        const confirmar = window.confirm("Excluir administrador " + adm.nome + "?");
                                        if (confirmar) {
                                            excluirAdministrador(adm.id);
                                            setListaAdministadores(buscarAdministradores());
                                        }
                                    }}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </>
    );
}

export default TelaListaAdm;