import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableInheritance } from "typeorm"
import { Almacen } from "./Almacen"
import { Producto } from "./Producto"

@Entity()
export class Distribucion {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    lote: string

    @Column('float')
    cantidad: number

    @ManyToOne(() => Producto, (producto) => producto.distribuciones)
    producto: Producto

    @OneToMany(() => Almacen, (almacen) => almacen.distribucion)
    almacenes: Almacen[]
    

}