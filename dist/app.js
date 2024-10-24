"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_js_1 = require("./data.js");
var table = document.getElementById('TableBody');
var promedio = (data_js_1.series.reduce(function (acc, serie) { return acc + serie.temporadas; }, 0) / data_js_1.series.length);
data_js_1.series.forEach(function (serie) {
    var row = table.insertRow();
    row.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td><a href=\"").concat(serie.urlPlataforma, "\" target=\"_blank\">").concat(serie.titulo, "</a></td>\n            <td>").concat(serie.plataforma, "</td>\n            <td>").concat(serie.temporadas, "</td>\n        ");
});
var row = table.insertRow();
row.innerHTML = "<td colspan=\"2\">Promedio de temporadas: ".concat(promedio, "</td>");
