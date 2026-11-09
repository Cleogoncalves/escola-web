import { api } from '@/lib/axios';
import type { MensagemResposta, Turma, TurmaComRelacoes, TurmaPayload } from '@/types/escola';

export const turmaService = {
    async listar() {
        const { data } = await api.get<TurmaComRelacoes[]>('/turmas');
        return data;
    },

    async criar(turma: TurmaPayload) {
        const { data } = await api.post<Turma>('/turmas', turma);
        return data;
    },

    async editar(id: number, turma: TurmaPayload) {
        const { data } = await api.put<MensagemResposta>(`/turmas/${id}`, turma);
        return data;
    },

    async deletar(id: number) {
        const { data } = await api.delete<MensagemResposta>(`/turmas/${id}`);
        return data;
    }
};
