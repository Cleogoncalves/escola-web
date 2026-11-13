/** Resposta de editar/deletar. A API devolve 200 mesmo quando o registro não existe. */
export interface MensagemResposta {
    mensagem: string;
}

/* Registros das tabelas (retorno de criar) */

export interface Curso {
    id: number;
    nome: string;
    codigo: string;
}

export interface Disciplina {
    id: number;
    nome: string;
    codigo: string;
}

export interface Professor {
    id: number;
    matricula: string;
    nome: string;
    email: string;
    /** Data em ISO 8601, ex.: 2003-05-10T00:00:00.000Z */
    nascimento: string;
}

export interface Aluno {
    id: number;
    matricula: string;
    nome: string;
    email: string;
    /** Data em ISO 8601, ex.: 2003-05-10T00:00:00.000Z */
    nascimento: string;
    curso_id: number;
}

export interface Turma {
    id: number;
    nome: string;
    disciplina_id: number;
    professor_id: number;
}

export interface Matricula {
    turma_id: number;
    aluno_id: number;
}

export interface CursoDisciplina {
    curso_id: number;
    disciplina_id: number;
}

/* Registros com relacionamentos (retorno de listar) */

export interface CursoComDisciplinas extends Curso {
    disciplinas: Disciplina[];
}

export interface DisciplinaComCursos extends Disciplina {
    cursos: Curso[];
}

export interface TurmaDoAluno extends Turma {
    disciplina: Disciplina;
    professor: Professor;
}

export interface AlunoComRelacoes extends Aluno {
    curso: Curso;
    turmas: TurmaDoAluno[];
}

export interface TurmaDoProfessor {
    id: number;
    nome: string;
    disciplina_id: number;
    disciplina: Disciplina;
}

export interface ProfessorComRelacoes extends Professor {
    turmas: TurmaDoProfessor[];
    cursos: Curso[];
}

export interface TurmaComRelacoes extends Turma {
    professor: Professor;
    alunos: Omit<Aluno, 'curso_id'>[];
}

/* Corpos de criar/editar. O PUT sobrescreve todos os campos, então todos são obrigatórios. */

export type CursoPayload = Omit<Curso, 'id'>;
export type DisciplinaPayload = Omit<Disciplina, 'id'>;
export type ProfessorPayload = Omit<Professor, 'id'>;
export type AlunoPayload = Omit<Aluno, 'id'>;
export type TurmaPayload = Omit<Turma, 'id'>;
