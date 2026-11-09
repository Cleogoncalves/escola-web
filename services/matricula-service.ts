import { api } from '@/lib/axios';
import type { Matricula, MensagemResposta } from '@/types/escola';

export const matriculaService = {
    async listar() {
        const { data } = await api.get<Matricula[]>('/matriculas');
        return data;
    },

    async criar(matricula: Matricula) {
        const { data } = await api.post<Matricula>('/matriculas', matricula);
        return data;
    },

    async deletar({ turma_id, aluno_id }: Matricula) {
        const { data } = await api.delete<MensagemResposta>(`/matriculas/${turma_id}/${aluno_id}`);
        return data;
    }
};
