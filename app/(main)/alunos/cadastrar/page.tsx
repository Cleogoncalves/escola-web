'use client'
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'

export default function CadastrarAluno() {
    const [matricula, setMatricula] = useState('')
    const [nome, setNome] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [email, setEmail] = useState('')

    return (
        <div>
            <h3>Cadastrar novo aluno</h3>
            <form className="flex flex-column gap-2">
                <div className="flex flex-column">
                    <label htmlFor="matricula" className="font-semibold">
                        Matricula
                    </label>
                    <InputText
                        value={matricula}
                        onChange={(evento) => setMatricula(evento.target.value)}
                        id="matricula"
                        placeholder="Digite a matricula do aluno"
                        maxLength={10}
                    />
                </div>
                <div className="flex flex-column">
                    <label htmlFor="nome" className="font-semibold">
                        Nome
                    </label>
                    <InputText
                        value={nome}
                        onChange={(evento) => setNome(evento.target.value)}
                        id="nome"
                        placeholder="Digite o nome do aluno"
                        maxLength={100}
                    />
                </div>
                <div className="flex flex-column">
                    <label htmlFor="nascimento" className="font-semibold">
                        Data de nascimento
                    </label>
                    <InputText
                        value={nascimento}
                        onChange={(evento) => setNascimento(evento.target.value)}
                        id="nascimento"
                        placeholder="Digite a data de nascimento do aluno"
                        maxLength={10}
                    />
                </div>
                <div className="flex flex-column">
                    <label htmlFor="email" className="font-semibold">
                        E-mail
                    </label>
                    <InputText
                        value={email}
                        onChange={(evento) => setEmail(evento.target.value)}
                        id="email"
                        placeholder="Digite o e-mail do aluno"
                        type="email"
                    />
                </div>
            </form>
        </div>
    )
}
