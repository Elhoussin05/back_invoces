import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Documento } from "./Documento"


@Entity()
export class Transaccion {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=>Documento,(documento)=>documento.transacciones)
    documento:Documento

}