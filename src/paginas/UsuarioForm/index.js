import { useEffect, useState } from "react";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import { atualizarUsuario, buscarUsuarioPeloId, cadastrarUsuario } from "../../servicos/usuarios";
import { useNavigate, useParams } from "react-router-dom";
import EntradaForm from "../../componentes/EntradaForm";

function UsuarioForm() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [status, setStatus] = useState("");

    const navigate = useNavigate();

    const enviarFormulario = async (e) => {
        e.preventDefault();

        const dadosUsuario = {
            nome,
            cpf,
            email,
            senha,
            dataNascimento,
            status
        }

        console.log(dadosUsuario);

        if (id) {
            await atualizarUsuario(id, dadosUsuario, navigate);
        } else {
            await cadastrarUsuario(dadosUsuario, navigate);
        }
    }

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            buscarUsuarioPeloId(id,
                setNome, setCpf,
                setEmail, setSenha,
                setDataNascimento, setStatus);
        }
    }, []);

    const cancelar = (e) => {
        e.preventDefault();

        navigate("/usuarios");
    }

    return (
        <>
            <Cabecalho />

            <section id="usuario-form" className="container mt-3">
                <h1>Dados do Usuário</h1>

                <form className="row g-3" onSubmit={enviarFormulario}>
                    <EntradaForm
                        htmlFor="nome"
                        label="Nome"
                        placeholder="Digite seu nome completo"
                        state={nome}
                        setState={setNome}
                        required={true}
                    />

                    <EntradaForm
                        htmlFor="cpf"
                        label="CPF"
                        state={cpf}
                        setState={setCpf}
                        required={true}
                    />

                    <EntradaForm
                        htmlFor="email"
                        label="E-mail"
                        type="email"
                        state={email}
                        setState={setEmail}
                        required={true}
                    />

                    <EntradaForm
                        htmlFor="senha"
                        label="Senha"
                        type="password"
                        state={senha}
                        setState={setSenha}
                        required={true}
                    />

                    <EntradaForm
                        htmlFor="data-nascimento"
                        label="Data de Nascimento"
                        type="date"
                        state={dataNascimento}
                        setState={setDataNascimento}
                        required={true}
                    />

                    <div className="col-md-6 col-12">
                        <label className="form-label" htmlFor="status">Status</label>
                        <select
                            id="status"
                            className="form-select"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                        >
                            <option disabled value="">Escolha uma opção...</option>
                            <option value={"INATIVO"}>Inativo</option>
                            <option value={"ATIVO"}>Ativo</option>
                        </select>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Salvar</button>
                        <button
                            className="btn btn-outline-primary ms-2"
                            onClick={cancelar}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </section>

            <Rodape />
        </>
    );
}

export default UsuarioForm;