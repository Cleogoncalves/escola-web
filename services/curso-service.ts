import { api } from '@/lib/axios';
import type { Curso, CursoComDisciplinas, CursoDisciplina, CursoPayload, MensagemResposta } from '@/types/escola';

export const cursoService = {
    async listar() {
        const { data } = await api.get<CursoComDisciplinas[]>('/cursos');
        return data;
    },

    async criar(curso: CursoPayload) {
        const { data } = await api.post<Curso>('/cursos', curso);
        return data;
    },

    async editar(id: number, curso: CursoPayload) {
        const { data } = await api.put<MensagemResposta>(`/cursos/${id}`, curso);
        return data;
    },

    async deletar(id: number) {
        const { data } = await api.delete<MensagemResposta>(`/cursos/${id}`);
        return data;
    },

    async adicionarDisciplina(id: number, disciplinaId: number) {
        const { data } = await api.post<CursoDisciplina>(`/cursos/${id}/disciplinas`, { disciplina_id: disciplinaId });
        return data;
    },

    async removerDisciplina(id: number, disciplinaId: number) {
        const { data } = await api.delete<MensagemResposta>(`/cursos/${id}/disciplinas/${disciplinaId}`);
        return data;
    }
};
