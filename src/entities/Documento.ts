import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Transaccion } from "./Transaccion"

@Entity()
export class Documento {

    @PrimaryGeneratedColumn()
    id: number
    
    @OneToMany(() => Transaccion, (transaccion) => transaccion.documento)
    transacciones: Transaccion[]

}