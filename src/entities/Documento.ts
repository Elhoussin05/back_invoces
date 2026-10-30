import { Entity, PrimaryGeneratedColumn, Column, TableInheritance, OneToMany } from "typeorm"
import { Transaccion } from "./Transaccion"

@Entity()
@TableInheritance({column: {type: "varchar" ,name: "tipoDocumento"}})
export class Documento {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    logo: string

    @Column()
    nombreEmpresa: string

    @Column()
    direccionEmpresa: string

    @Column()
    telefonoEmpresa: string

    @Column()
    emailEmpresa: string

    @Column()
    nifEmpresa: string

    @Column()
    nombreCliente: string

    @Column()
    direccionCliente: string

    @Column()
    telefonoCliente: string

    @Column()
    emailCliente: string

    @Column()
    nifCliente: string

    @OneToMany(()=>Transaccion,(transaccion)=> transaccion.documento)
    transacciones:Transaccion[]

}