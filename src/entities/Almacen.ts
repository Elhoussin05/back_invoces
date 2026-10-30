import { Column, Entity, PrimaryGeneratedColumn, TableInheritance } from "typeorm"

@Entity()
export class Almacen {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    ubicacion: string

}