import { Usuario } from "src/Model/usuarios"

export class Comentario {


    constructor(
        public id: number,
        public texto: string,
        public fecha: string,
        public usuario: Usuario

    ){}
}