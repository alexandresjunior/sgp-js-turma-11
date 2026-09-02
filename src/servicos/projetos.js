import { api } from "./api";

export async function listarProjetos(setProjetos) {
    await api.get("/projetos").then((resposta) => {
        if (resposta.status === 200) {
            setProjetos(resposta.data);
        }
    }).catch((erro) => {
        alert("Erro ao listar projetos.");
        console.error("Erro ao listar projetos: ", erro);
    })
}

export async function cadastrarProjeto(dadosProjeto, navigate) {
    await api.post("/projetos", dadosProjeto).then((resposta) => {
        if (resposta.status === 201) {
            alert("Projeto cadastrado com sucesso!");
            navigate("/projetos");
        }
    }).catch((erro) => {
        alert("Erro ao cadastrar projeto.");
        console.error("Erro ao cadastrar projeto: ", erro);
    });
}

export async function atualizarProjeto(idProjeto, dadosProjeto, navigate) {
    await api.put(`/projetos/${idProjeto}`, dadosProjeto).then((resposta) => {
        if (resposta.status === 200) {
            alert("Projeto atualizado com sucesso!");
            navigate("/projetos");
        }
    }).catch((erro) => {
        alert("Erro ao atualizar projeto.");
        console.error("Erro ao atualizar projeto: ", erro);
    });
}