import { Entity, PrimaryGeneratedColumn, Column, ChildEntity } from "typeorm"
import { Documento } from "./Documento"

@ChildEntity()
export class Presupuesto extends Documento {

    


}