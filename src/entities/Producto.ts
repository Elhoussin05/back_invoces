import { Column, Entity, OneToMany, PrimaryGeneratedColumn, TableInheritance } from "typeorm"
import { Transaccion } from "./Transaccion"
import { Distribucion } from "./Distribucion"

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column('float')
    stock: number

    @OneToMany(() => Transaccion, (transaccion) => transaccion.producto)
    transacciones: Transaccion[]

    @OneToMany(() => Distribucion, (distribucion) => distribucion.producto)
    distribuciones: Distribucion[]

}