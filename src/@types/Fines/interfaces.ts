export interface IFine {
     id: string;
     status: string;
     dataInfracao: string;
     situacao: string;
     cidade: string
     codigo: string;
     valorBoleto: string;
     dataVencimentoBoleto: string;
     placa: string;
     descricao: string; 
     horaInfracao: string; 
     apCondutorDataVencimento: string; 
     endereco: string; 
     artigo: string; 
     nroProcessamentoMG: string; 
     valor: string; 
     codigoBarras: string; 
     orgao: string; 
     renavam: string; 
     ait: string; 
     id_situacao: string; 
     pontuacao: string; 
     velocidadeMedida: string; 
     velocidadeRegulamentada: string; 
     autoInfracao2: string; 
     uf: string; 
     datahoraInfracaoUTC: string; 
     nicAutoInfracaoOriginario: string; 
     aiipmulta: string; 
}

export type ITotalFinesCount = {
     data: IFine[];
     totalCount: number;
}