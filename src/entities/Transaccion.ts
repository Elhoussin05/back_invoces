import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, TableInheritance } from "typeorm"
import { UnidadDeMedida } from "./UnidadDeMedida"
import { Iva } from "./Iva"
import { Producto } from "./Producto"
import { AgenteComercial } from "./AgenteComercial"
import { Documento } from "./Documento"

@Entity()
@TableInheritance({ column: { type: "varchar", name: "tipoTransaccion" } })
export class Transaccion {

    @PrimaryGeneratedColumn()
    id: number

    @Column('float')
    precioUnitario: number

    @Column()
    unidades: number

    @Column({
        type: "enum",
        enum: UnidadDeMedida,
        default: UnidadDeMedida.UNIDAD,
    })
    unidadDeMedida: UnidadDeMedida

    @Column('float')
    precioMedida: number

    @Column('float')
    cantidadUnidadMedida: number

    @Column()
    fecha: Date

    @Column({
        type: "enum",
        enum: Iva,
        default: Iva.COMUN,
    })
    iva: Iva

    @Column()
    lote: String

    @ManyToOne(() => Producto, (producto) => producto.transacciones)
    producto: Producto

    @ManyToOne(() => AgenteComercial, (agenteComercial) => agenteComercial.transacciones)
    agenteComercial: AgenteComercial

    @ManyToOne(() => Documento, (documento) => documento.transacciones)
    documento: Documento


}