import { Column, Entity, PrimaryGeneratedColumn, TableInheritance } from "typeorm"

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column('float')
    stock: number

}