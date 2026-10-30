import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Transaccion } from "./Transaccion"


@Entity()
export class AgenteComercial {

    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(() => Transaccion, (transaccion) => transaccion.agenteComercial)
    transacciones: Transaccion[]
        

}