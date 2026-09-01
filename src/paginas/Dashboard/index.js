import { useEffect, useState } from "react";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import { listarUsuarios } from "../../servicos/usuarios";
import { listarProjetos } from "../../servicos/projetos";
import { listarTarefas } from "../../servicos/tarefas";
import { 
    Chart as ChartJS, 
    ArcElement, 
    BarElement, 
    CategoryScale, 
    Legend, 
    LinearScale, 
    Title, 
    Tooltip 
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
)

function Dashboard() {
    const [usuarios, setUsuarios] = useState([]);
    const [projetos, setProjetos] = useState([]);
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        listarUsuarios(setUsuarios);
        listarProjetos(setProjetos);
        listarTarefas(setTarefas);
    }, []);

    const labels = projetos?.map((projeto) => projeto.nome);

    const optionsVerticalBar = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Status das Tarefas por Projeto',
            },
        },
        maintainAspectRatio: false
    };

    const optionsHorizontalBar = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Prioridade das Tarefas por Projeto',
            },
        },
        maintainAspectRatio: false
    };

    const dataVerticalBar = {
        labels,
        datasets: [
            {
                label: 'PENDENTE',
                data: projetos?.map((projeto) => {
                    return tarefas?.filter((tarefa) => (
                        tarefa.status === 'PENDENTE' && tarefa.projetoId === projeto.id
                    )).length
                }),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'FAZENDO',
                data: projetos?.map((projeto) => {
                    return tarefas?.filter((tarefa) => (
                        tarefa.status === 'FAZENDO' && tarefa.projetoId === projeto.id
                    )).length
                }),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'FINALIZADA',
                data: projetos?.map((projeto) => {
                    return tarefas?.filter((tarefa) => (
                        tarefa.status === 'FINALIZADA' && tarefa.projetoId === projeto.id
                    )).length
                }),
                backgroundColor: 'rgba(53, 235, 90, 0.5)',
            }
        ],
    };

    const dataHorizontalBar = {
        labels,
        datasets: [
            {
                label: 'ALTA',
                data: projetos?.map((projeto) => {
                    return tarefas?.filter((tarefa) => (
                        tarefa.prioridade === 'ALTA' && tarefa.projetoId === projeto.id
                    )).length
                }),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'MEDIA',
                data: projetos?.map((projeto) => {
                    return tarefas?.filter((tarefa) => (
                        tarefa.prioridade === 'MEDIA' && tarefa.projetoId === projeto.id
                    )).length
                }),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'BAIXA',
                data: projetos?.map((projeto) => {
                    return tarefas?.filter((tarefa) => (
                        tarefa.prioridade === 'BAIXA' && tarefa.projetoId === projeto.id
                    )).length
                }),
                backgroundColor: 'rgba(53, 235, 90, 0.5)',
            },
        ],
    };

    const dataPieChart = {
        labels: ['ATIVO', 'INATIVO'],
        datasets: [
            {
                label: 'No. Usuarios',
                data: [
                    usuarios?.filter((usuario) => (usuario.status === 'ATIVO')).length,
                    usuarios?.filter((usuario) => (usuario.status === 'INATIVO')).length,
                ],
                backgroundColor: [
                    'rgba(17, 255, 0, 0.2)',
                    'rgba(255, 0, 0, 0.2)',
                ]
            },
        ],
    };

    return (
        <>
            <Cabecalho />

            <section id="dashboard" className="container">
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <Bar 
                                options={optionsVerticalBar}
                                data={dataVerticalBar}
                                width={850}
                                height={350}
                            />
                        </div>
                        <div className="col-md-6 col-12">
                            <Bar 
                                options={optionsHorizontalBar}
                                data={dataHorizontalBar}
                                width={850}
                                height={350}
                            />
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="col-md-6 col-12">
                        <Pie 
                            data={dataPieChart}
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
            </section>
        
            <Rodape />
        </>
    );
}

export default Dashboard;