import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { AgenteComercial } from "./AgenteComercial"
import { ClienteLocal } from "./ClienteLocal"


@Entity()
export class Cliente extends AgenteComercial {


   @OneToMany(()=>ClienteLocal,(locales=>locales.cliente))
   locales:ClienteLocal[]
    


}