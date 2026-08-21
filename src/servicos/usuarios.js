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
        console.error("Erro ao cadastrar usuário: ", erro);
    });
}

export async function atualizarUsuario(idUsuario, dadosUsuario, navigate) {
    await api.put(`/usuarios/${idUsuario}`, dadosUsuario).then((resposta) => {
        if (resposta.status === 200) {
            alert("Usuário atualizado com sucesso!");
            navigate("/usuarios");
        }
    }).catch((erro) => {
        alert("Erro ao atualizar usuário.");
        console.error("Erro ao atualizar usuário: ", erro);
    });
}

export async function buscarUsuarioPeloId(
    idUsuario,
    setNome,
    setCpf,
    setEmail,
    setSenha,
    setDataNascimento,
    setStatus
) {
    await api.get(`/usuarios/${idUsuario}`).then((resposta) => {
        if (resposta.status === 200) {
            setNome(resposta.data?.nome);
            setCpf(resposta.data?.cpf);
            setEmail(resposta.data?.email);
            setSenha(resposta.data?.senha);
            setDataNascimento(resposta.data?.dataNascimento);
            setStatus(resposta.data?.status);
        }
    }).catch((erro) => {
        alert("Erro ao buscar usuário.");
        console.error("Erro ao buscar usuário: ", erro);
    });
}