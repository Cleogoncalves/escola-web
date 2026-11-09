import { api } from '@/lib/axios';
import type { MensagemResposta, Professor, ProfessorComRelacoes, ProfessorPayload } from '@/types/escola';

export const professorService = {
    async listar() {
        const { data } = await api.get<ProfessorComRelacoes[]>('/professores');
        return data;
    },

    async criar(professor: ProfessorPayload) {
        const { data } = await api.post<Professor>('/professores', professor);
        return data;
    },

    async editar(id: number, professor: ProfessorPayload) {
        const { data } = await api.put<MensagemResposta>(`/professores/${id}`, professor);
        return data;
    },

    async deletar(id: number) {
        const { data } = await api.delete<MensagemResposta>(`/professores/${id}`);
        return data;
    }
};
