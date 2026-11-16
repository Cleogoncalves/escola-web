'use client'
import { alunoService } from '@/services/aluno-service'
import { AlunoComRelacoes } from '@/types/escola'
import { useRouter } from 'next/navigation'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { useCallback, useEffect, useState } from 'react'

export default function Alunos() {
    const [alunos, setAlunos] = useState<AlunoComRelacoes[]>([])
    const router = useRouter()

    const buscarAlunos = useCallback(async () => {
        const alunosApi = await alunoService.listar()
        setAlunos(alunosApi)
    }, [])

    useEffect(() => {
        buscarAlunos()
    }, [buscarAlunos])

    return (
        <div>
            <section className="flex justify-content-end">
                <Button link icon="pi pi-plus" outlined label="Cadastrar aluno" onClick={() => router.push('/alunos/cadastrar')}></Button>
            </section>
            <DataTable emptyMessage="Nenhum aluno encontrado" value={alunos}>
                <Column header="Matricula" field="matricula"></Column>
                <Column header="Nome" field="nome"></Column>
                <Column
                    header="Data Nascimento"
                    field="nascimento"
                    body={(aluno) => new Date(aluno.nascimento).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
                ></Column>
                <Column header="E-mail" field="email"></Column>
            </DataTable>
        </div>
    )
}
