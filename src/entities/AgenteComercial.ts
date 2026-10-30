import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class AgenteComercial {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nom: string

}
