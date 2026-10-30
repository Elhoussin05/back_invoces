import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Cliente } from "./Cliente"

@Entity()
export class ClienteLocal {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=>Cliente,(cliente=>cliente.locales))
    cliente:Cliente

}