import { useEffect, useState } from "react";
import Cabecalho from "../../componentes/Cabecalho";
import EntradaForm from "../../componentes/EntradaForm";
import Rodape from "../../componentes/Rodape";
import { listarUsuarios } from "../../servicos/usuarios";

function ProjetoForm() {
    const [nome, setNome] = useState("");
    const [responsavel, setResponsavel] = useState();
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        listarUsuarios(setUsuarios);
    }, []);
    
    return (
        <>
            <Cabecalho />

            <section id="projeto-form" className="container mt-3">
                <h1>Dados do Projeto</h1>

                <form className="row g-3" onSubmit={() => {}}>
                     <EntradaForm
                        htmlFor="nome"
                        label="Nome"
                        placeholder="Digite o nome do projeto"
                        state={nome}
                        setState={setNome}
                        required={true}
                    />

                    <div className="col-md-6 col-12">
                        <label className="form-label" htmlFor="responsavel">Responsável</label>
                        <select
                            id="responsavel"
                            className="form-select"
                            value={responsavel}
                            onChange={(e) => setResponsavel(e.target.value)}
                            required
                        >
                            <option disabled value="">Escolha uma opção...</option>
                            {usuarios?.map((usuario) => (
                                <option value={usuario.id} key={usuario.id}>{usuario.nome}</option>
                            ))}
                        </select>
                    </div>
                </form>
            </section>

            <Rodape />
        </>
    );
}

export default ProjetoForm;