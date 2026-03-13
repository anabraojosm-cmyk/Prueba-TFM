const piezas = {
"2345": {nombre:"Ventana 1", tipologia:"Ventana", materiales:"Cristal, aluminio", dimensiones:"3 metros", fecha:"Siglo XX", autor:"Bien institución"},
"2346": {nombre:"Ventana 2", tipologia:"Ventana", materiales:"Cristal, aluminio", dimensiones:"3 metros", fecha:"Siglo XX", autor:"Bien institución"},
"1089": {nombre:"Cuadro 1", tipologia:"Pintura", materiales:"Lienzo", dimensiones:"150 x 120 cm", fecha:"Siglo XVII", autor:"Zurbarán"},
"1090": {nombre:"Cuadro 2", tipologia:"Pintura", materiales:"Lienzo", dimensiones:"140 x 100 cm", fecha:"Siglo XVII", autor:"Zurbarán"},
"1086": {nombre:"Cuadro 3", tipologia:"Pintura", materiales:"Lienzo", dimensiones:"130 x 95 cm", fecha:"Siglo XVII", autor:"Zurbarán"},
"1083": {nombre:"Cuadro 4", tipologia:"Pintura", materiales:"Lienzo", dimensiones:"120 x 90 cm", fecha:"Siglo XVII", autor:"Zurbarán"},
"1465": {nombre:"Tapiz 1", tipologia:"Tapiz", materiales:"Textil", dimensiones:"3 metros", fecha:"Siglo XVIII", autor:"Bien institución"},
"1726": {nombre:"Alfombra 1", tipologia:"Alfombra", materiales:"Lana", dimensiones:"4 metros", fecha:"Siglo XIX", autor:"Bien institución"},
"1040": {nombre:"Cortina 1", tipologia:"Textil", materiales:"Tela", dimensiones:"3 metros", fecha:"Siglo XX", autor:"Bien institución"},
"1041": {nombre:"Cortina 2", tipologia:"Textil", materiales:"Tela", dimensiones:"3 metros", fecha:"Siglo XX", autor:"Bien institución"},
"0034": {nombre:"Radiador 1", tipologia:"Radiador", materiales:"Metal", dimensiones:"1 metro", fecha:"Siglo XX", autor:"Bien institución"},
"1263": {nombre:"Escultura 1", tipologia:"Escultura", materiales:"Bronce", dimensiones:"80 cm", fecha:"Siglo XIX", autor:"Bien institución"},
"1274": {nombre:"Escultura 2", tipologia:"Escultura", materiales:"Mármol", dimensiones:"90 cm", fecha:"Siglo XIX", autor:"Bien institución"},
"2040": {nombre:"Librería 1", tipologia:"Mueble", materiales:"Madera", dimensiones:"2 metros", fecha:"Siglo XX", autor:"Bien institución"},
"2041": {nombre:"Librería 2", tipologia:"Mueble", materiales:"Madera", dimensiones:"2 metros", fecha:"Siglo XX", autor:"Bien institución"},
"1050": {nombre:"Silla 1", tipologia:"Mueble", materiales:"Madera", dimensiones:"1 metro", fecha:"Siglo XX", autor:"Bien institución"}
};

const menuButton = document.getElementById("menuButton");
const menuPanel = document.getElementById("menuPanel");
const searchButton = document.getElementById("searchButton");
const codeInput = document.getElementById("codeInput");
const objectInfo = document.getElementById("objectInfo");

menuButton.addEventListener("click", () => {
menuPanel.classList.toggle("active");
});

searchButton.addEventListener("click", () => {
const code = codeInput.value.trim();
const pieza = piezas[code];

if (pieza) {
objectInfo.innerHTML = `       <span><strong>Nombre:</strong> ${pieza.nombre}</span>       <span><strong>Tipología:</strong> ${pieza.tipologia}</span>       <span><strong>Material:</strong> ${pieza.materiales}</span>       <span><strong>Dimensiones:</strong> ${pieza.dimensiones}</span>       <span><strong>Fecha:</strong> ${pieza.fecha}</span>       <span><strong>Autor:</strong> ${pieza.autor}</span>
    `;
} else {
objectInfo.innerHTML = `       <span><strong>Nombre:</strong></span>       <span><strong>Tipología:</strong></span>       <span><strong>Material:</strong></span>       <span><strong>Dimensiones:</strong></span>       <span><strong>Fecha:</strong></span>       <span><strong>Autor:</strong></span>
    `;
}
});
