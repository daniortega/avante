const parametros = new URLSearchParams(window.location.search);
let pelicula = parametros.get("pelicula") || "";
let director = parametros.get("director") || "";
let año = parametros.get("año") || "";

const mensaje = `Película: ${pelicula}\nDirector: ${director}\nAño: ${año}`;

console.log(mensaje);

const parrafo = document.getElementById("mensaje");
parrafo.replaceChildren(
    document.createTextNode(`Película: ${pelicula}`),
    document.createElement("br"),
    document.createTextNode(`Director: ${director}`),
    document.createElement("br"),
    document.createTextNode(`Año: ${año}`)
);