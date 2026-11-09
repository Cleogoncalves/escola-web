import { api } from '@/lib/axios';
import type { Aluno, AlunoComRelacoes, AlunoPayload, MensagemResposta } from '@/types/escola';

export const alunoService = {
    async listar() {
        const { data } = await api.get<AlunoComRelacoes[]>('/alunos');
        return data;
    },

    async criar(aluno: AlunoPayload) {
        const { data } = await api.post<Aluno>('/alunos', aluno);
        return data;
    },

    async editar(id: number, aluno: AlunoPayload) {
        const { data } = await api.put<MensagemResposta>(`/alunos/${id}`, aluno);
        return data;
    },

    async deletar(id: number) {
        const { data } = await api.delete<MensagemResposta>(`/alunos/${id}`);
        return data;
    }
};
