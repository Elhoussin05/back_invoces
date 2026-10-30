import { Column, Entity, PrimaryGeneratedColumn, TableInheritance } from "typeorm"

@Entity()
export class Distribucion {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    lote: string

    @Column('float')
    cantidad: number

}