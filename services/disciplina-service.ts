import { api } from '@/lib/axios';
import type { Disciplina, DisciplinaComCursos, DisciplinaPayload, MensagemResposta } from '@/types/escola';

export const disciplinaService = {
    async listar() {
        const { data } = await api.get<DisciplinaComCursos[]>('/disciplinas');
        return data;
    },

    async criar(disciplina: DisciplinaPayload) {
        const { data } = await api.post<Disciplina>('/disciplinas', disciplina);
        return data;
    },

    async editar(id: number, disciplina: DisciplinaPayload) {
        const { data } = await api.put<MensagemResposta>(`/disciplinas/${id}`, disciplina);
        return data;
    },

    async deletar(id: number) {
        const { data } = await api.delete<MensagemResposta>(`/disciplinas/${id}`);
        return data;
    }
};
