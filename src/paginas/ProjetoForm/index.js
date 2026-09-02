import { useEffect, useState } from "react";
import Cabecalho from "../../componentes/Cabecalho";
import EntradaForm from "../../componentes/EntradaForm";
import Rodape from "../../componentes/Rodape";
import { listarUsuarios } from "../../servicos/usuarios";
import { useNavigate, useParams } from "react-router-dom";
import { atualizarProjeto, cadastrarProjeto } from "../../servicos/projetos";

function ProjetoForm() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [dataConclusao, setDataConclusao] = useState("");
    const [status, setStatus] = useState("ATIVO");
    const [responsavelId, setResponsavelId] = useState(0);
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        listarUsuarios(setUsuarios);
    }, []);

    const navigate = useNavigate();

    const enviarFormulario = async (e) => {
        e.preventDefault();

        const dadosProjeto = {
            nome,
            descricao,
            dataInicio,
            dataConclusao,
            status,
            responsavelId
        }

        if (id) {
            await atualizarProjeto(id, dadosProjeto, navigate);
        } else {
            await cadastrarProjeto(dadosProjeto, navigate);
        }
    }

    const cancelar = (e) => {
        e.preventDefault();

        navigate("/projetos");
    }

    const { id } = useParams();

    return (
        <>
            <Cabecalho />

            <section id="projeto-form" className="container mt-3">
                <h1>Dados do Projeto</h1>

                <form className="row g-3" onSubmit={enviarFormulario}>
                     <EntradaForm
                        htmlFor="nome"
                        label="Nome"
                        placeholder="Digite o nome do projeto"
                        state={nome}
                        setState={setNome}
                        required={true}
                    />

                    <EntradaForm
                        htmlFor="descricao"
                        label="Descricao"
                        state={descricao}
                        setState={setDescricao}
                        required={true}
                    />

                    <EntradaForm
                        htmlFor="dataInicio"
                        label="Data de Inicio"
                        state={dataInicio}
                        type="date"
                        setState={setDataInicio}
                        required={true}
                    />

                    <EntradaForm
                        htmlFor="dataConclusao"
                        label="Data de Conclusao"
                        type="date"
                        state={dataConclusao}
                        setState={setDataConclusao}
                    />

                    <EntradaForm
                        htmlFor="status"
                        label="Status"
                        state={status}
                        setState={setStatus}
                        required={true}
                    />

                    <div className="col-md-6 col-12">
                        <label className="form-label" htmlFor="responsavel">Responsável</label>
                        <select
                            id="responsavel"
                            className="form-select"
                            defaultValue={responsavelId}
                            onChange={(e) => setResponsavelId(e.target.value)}
                            required
                        >
                            <option disabled value={0}>Escolha uma opção...</option>
                            {usuarios?.map((usuario) => (
                                <option value={usuario.id} key={usuario.id}>{usuario.nome}</option>
                            ))}
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

export default ProjetoForm;