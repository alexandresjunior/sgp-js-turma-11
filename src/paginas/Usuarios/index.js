import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import { LISTA_USUARIOS } from "../../mocks/usuarios";

function Usuarios() {
    return (
        <>
            <Cabecalho />

            <section id="usuarios" className="container mt-3">
                <div className="d-flex justify-content-between">
                    <h1>Usuários Cadastrados</h1>
                    <button className="btn btn-primary">Novo Usuário</button>
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">CPF</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Idade</th>
                            <th scope="col">Status</th>
                            <th scope="col">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            LISTA_USUARIOS.map((usuario) => (
                                <tr scope="row" key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.cpf}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.idade}</td>
                                    <td>{usuario.status}</td>
                                    <td>
                                        <div className="btn-group">
                                            <button className="btn btn-outline-primary">Editar</button>
                                            <button className="btn btn-outline-danger">Excluir</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>

            <Rodape />
        </>
    );
}

export default Usuarios;