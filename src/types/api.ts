export interface TipoEvento {
    idTipoEvento: string;
    titulo: string;
}

export interface instituicao {
    nomeFantasia: string;
    cnpj: string;

}

export interface Evento{
    idEvento: string;
    nome:string;
    descricao:string;
    dataEvento:string;
    imagemUrl?: string | null;
    idTipoEvento?:string | null;
    idInstituicao?:string | null;

    idTipoEventoNavigation?: TipoEvento | null;

}