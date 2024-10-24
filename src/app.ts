import { series } from './data';
import { Serie } from './Serie';
const table:HTMLTableElement = document.getElementById('TableBody') as HTMLTableElement;

let promedio = (series.reduce((acc, serie) => acc + serie.temporadas, 0) / series.length);

series.forEach(serie => {
    const row:HTMLTableRowElement = table.insertRow();
    row.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.titulo}</td>
            <td>${serie.plataforma}</td>
            <td>${serie.temporadas}</td>
        `;
    

    row.addEventListener('click',()=>{
        const serieDetail = document.getElementById('serieDetail') as HTMLDivElement;
        const serieImage = document.getElementById('serieImage') as HTMLImageElement;
        const serieTitle = document.getElementById('serieTitle') as HTMLElement;
        const serieDescription = document.getElementById('serieDescription') as HTMLElement;
        const serieLink = document.getElementById('serieLink') as HTMLAnchorElement;
    
        serieImage.src = serie.imagen;
        serieTitle.textContent = serie.titulo;
        serieDescription.textContent = serie.descripcion;
        serieLink.href = serie.urlPlataforma;
    
    });
});


const row:HTMLTableRowElement = table.insertRow();

row.innerHTML = `<td colspan="2">Promedio de temporadas: ${promedio}</td>`; 