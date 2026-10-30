import { Entity, PrimaryGeneratedColumn, Column, ChildEntity, OneToMany } from "typeorm"
import { Documento } from "./Documento"
import { Albaran } from "./Albaran"

@ChildEntity()
export class Factura extends Documento {

  

    @OneToMany(()=>Albaran,(albaran)=>albaran.factura)
    albaranes:Albaran[]

   


}
