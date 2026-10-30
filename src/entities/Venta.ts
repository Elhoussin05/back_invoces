import { ChildEntity, Column } from "typeorm";
import { Transaccion } from "./Transaccion";

@ChildEntity()
export class Venta extends Transaccion {
}