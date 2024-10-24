"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
var Serie = /** @class */ (function () {
    function Serie(id, titulo, plataforma, temporadas, descripcion, urlPlataforma, imagen) {
        this.id = id;
        this.titulo = titulo;
        this.plataforma = plataforma;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.urlPlataforma = urlPlataforma;
        this.imagen = imagen;
    }
    return Serie;
}());
exports.Serie = Serie;
