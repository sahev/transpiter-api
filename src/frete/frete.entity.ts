import { Column, CreateDateColumn, Entity, IsNull, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class Frete {
    @PrimaryGeneratedColumn()
    fre_frete: number;
    
    @Column()
    fre_carga: string;
    
    @Column()
    fre_descarga: string;
    
    @Column()
    fre_dias: number;
    
    @Column()
    fre_valorkm: number;
    @Column()
    fre_porc_icms: number;
    
    @Column()
    fre_porc_manutencao: number;
    
    @CreateDateColumn()
    fre_datacriacao: Date;
    
}

@Entity() 
export class Custo {
    @PrimaryGeneratedColumn()
    cus_custo: number;

    @Column()
    cus_frete: number;

    @Column()
    cus_vaziobase: number;
    
    @Column()
    cus_vaziobasekm: number;
    
    @Column()
    cus_carregado: number;
    
    @Column()
    cus_carregadokm: number;
    
    @Column()
    cus_vazioretorno: number;
    
    @Column()
    cus_vazioretornokm: number;
    
    @Column()
    cus_comissao: number;
    
    @Column()
    cus_salariodia: number;
    
    @Column()
    cus_seguro: number;

}