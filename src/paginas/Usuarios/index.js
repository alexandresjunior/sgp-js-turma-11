import { useEffect, useState } from "react";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import { excluirUsuarioPeloId, listarUsuarios } from "../../servicos/usuarios";
import { useNavigate } from "react-router-dom";
import Modal from "../../componentes/Modal";

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [exibirModal, setExibirModal] = useState(false);
    const [idUsuarioSelecionado, setIdUsuarioSelecionado] = useState();

    useEffect(() => {
        listarUsuarios(setUsuarios);
    }, []);

    const navigate = useNavigate();

    const confirmarExclusao = (id) => {
        setExibirModal(true);
        setIdUsuarioSelecionado(id);
    }

    const cancelarExclusao = () => {
        setExibirModal(false);
        setIdUsuarioSelecionado();
    }

    const excluirUsuario = async () => {
        await excluirUsuarioPeloId(idUsuarioSelecionado, setExibirModal);

        setUsuarios(usuarios.filter(usuario => usuario.id !== idUsuarioSelecionado));
        setIdUsuarioSelecionado();
    }

    return (
        <>
            <Cabecalho />

            <section id="usuarios" className="container mt-3">
                <div className="d-flex justify-content-between">
                    <h1>Usuários Cadastrados</h1>
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate("/usuarios/novo")}
                    >
                        Novo Usuário
                    </button>
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">CPF</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Data de Nascimento</th>
                            <th scope="col">Status</th>
                            <th scope="col">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios?.map((usuario) => (
                                <tr scope="row" key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.cpf}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.dataNascimento}</td>
                                    <td>{usuario.status}</td>
                                    <td>
                                        <div className="btn-group">
                                            <button
                                                className="btn btn-outline-primary"
                                                onClick={() => navigate(`/usuarios/${usuario.id}`)}
                                            >
                                                Editar
                                            </button>
                                            <button
                                                className="btn btn-outline-danger"
                                                onClick={() => confirmarExclusao(usuario.id)}
                                            >
                                                Excluir
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>

            {exibirModal && (
                <Modal
                    titulo={"Confirmação de Exclusão"}
                    texto={"Tem certeza que deseja excluir este usuário?"}
                    txtBtn01={"Sim, excluir."}
                    onClickBtn01={excluirUsuario}
                    txtBtn02={"Não, cancelar."}
                    onClickBtn02={cancelarExclusao}
                />
            )}

            <Rodape />
        </>
    );
}

export default Usuarios;