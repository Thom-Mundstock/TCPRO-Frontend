export type projetoStatus = 'EM_ANDAMENTO' | 'FINALIZADO' | 'BACKLOG' | 'PLANEJAMENTO';
export type projetoTipo = '';

export interface Projeto {
    id:             number;
    nome:           string;
    versao:         string;
    objetivo:       string;
    dataInicio:     Date;
    dataFim:        null;
    prazo:          Date;
    tipo:           projetoTipo;
    status:         projetoStatus;
    equipe:         Equipe;
    outrasUnidades: Unidade[];
}

export interface Equipe {
    id:           number;
    membros:      Membro[];
    patrocinador: Patrocinador;
}

export interface Membro {
    id:      number;
    nome:    string;
    email:   string;
    senha:   string;
    tipo:    string;
    funcao:  string;
    lotacao: string;
    setor:   string;
    ramal:   string;
}

export interface Patrocinador {
    id:      number;
    nome:    string;
    email:   string;
    senha:   string;
    tipo:    string;
    posicao: string;
}

export interface Unidade {
    id:               number;
    direcao:          string;
    nome:             string;
    setor:            string;
    responsabilidade: string;
    email:            string;
    ramal:            string;
    nomeServidor:     string;
}