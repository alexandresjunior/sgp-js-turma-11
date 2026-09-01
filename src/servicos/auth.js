import { api } from "./api";

export async function autenticarUsuario(email, senha, marcado, navigate) {
    await api.post("/auth/login", { email, senha }).then((resposta) => {
        if (marcado) {
            localStorage.setItem('accessToken', resposta.data.accessToken);
        } else {
            sessionStorage.setItem('accessToken', resposta.data.accessToken);
        }
        navigate("/dashboard");
    }).catch((erro) => {
        alert('Não foi possível autenticar usuário.');
        console.error('Não foi possível autenticar usuário:', erro);
    });
}
