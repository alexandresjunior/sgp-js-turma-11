import { api } from "./api";

export async function listarUsuarios(setUsuarios) {
    await api.get("/usuarios").then((resposta) => {
        if (resposta.status === 200) {
            setUsuarios(resposta.data);
        }
    }).catch((erro) => {
        alert("Erro ao listar usuários.");
        console.error("Erro ao listar usuários: ", erro);
    })
}

export async function cadastrarUsuario(dadosUsuario, navigate) {
    await api.post("/usuarios", dadosUsuario).then((resposta) => {
        if (resposta.status === 201) {
            alert("Usuário cadastrado com sucesso!");
            navigate("/usuarios");
        }
    }).catch((erro) => {
        alert("Erro ao cadastrar usuário.");
        console.error("Erro ao cadastrar usuário: ", erro)
    });
}