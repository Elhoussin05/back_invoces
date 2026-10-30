import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Transaccion } from "./Transaccion"

@Entity()
export class AgenteComercial {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nom: string

    @OneToMany(()=>Transaccion,(transaccion) => transaccion.agentecomercial)
    transacciones:Transaccion[]

}
