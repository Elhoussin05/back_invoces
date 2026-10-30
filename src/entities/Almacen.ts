import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance } from "typeorm"
import { Distribucion } from "./Distribucion"

@Entity()
export class Almacen {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    ubicacion: string

    @ManyToOne(() => Distribucion, (distribucion) => distribucion.almacenes)
    distribucion: Distribucion
        

}