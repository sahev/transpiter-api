export class FreteDTO {
    fre_frete?: number;
    fre_carga: string;
    fre_descarga: string;
    fre_totalkmrodado: number;
    fre_dias: number;
    fre_valorkm: number;
    fre_porc_icms: number;
    fre_porc_manutencao: number;
    custo?: {    
        cus_frete: number;
        cus_vaziobase: number;
        cus_vaziobasekm: number;
        cus_carregado: number;
        cus_carregadokm: number;
        cus_vazioretorno: number;
        cus_vazioretornokm: number;
        cus_comissao: number;
        cus_salariodia: number;
        cus_seguro: number;
    }
}

export class CustoDTO {
    cus_frete: number;
    cus_vaziobase: number;
    cus_vaziobasekm: number;
    cus_carregado: number;
    cus_carregadokm: number;
    cus_vazioretorno: number;
    cus_vazioretornokm: number;
    cus_comissao: number;
    cus_salariodia: number;
    cus_seguro: number;
}

export class RetornoFreteDTO {
    fre_carga: string;
    fre_descarga: string;
    fre_totalkmrodado: number;
    fre_dias: number;
    fre_valorkm: number;
    fre_porc_icms: number;
    fre_porc_manutencao: number;
    cus_frete: number;
    cus_vaziobase: number;
    cus_vaziobasekm: number;
    cus_carregado: number;
    cus_carregadokm: number;
    cus_vazioretorno: number;
    cus_vazioretornokm: number;
    cus_comissao: number;
    cus_salariodia: number;
    cus_seguro: number;
}