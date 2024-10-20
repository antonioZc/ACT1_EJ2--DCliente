const datapeliculas = {
  peliculas: [
    {
      id: 1,
      titulo: "Avengers: Endgame",
      descripcion:
        "Después de los devastadores eventos de Infinity War, los Vengadores restantes deben unirse para deshacer el caos causado por Thanos y restaurar el equilibrio en el universo.",
      ruta: "img/avengers.jpg",
    },
    {
      id: 2,
      titulo: "Deadpool y Lobezno",
      descripcion:
        "Deadpool y Lobezno unen fuerzas en esta comedia de acción, enfrentando juntos a enemigos mutantes y humanos mientras lidian con sus personalidades radicalmente opuestas y su brutal sentido del humor.",
      ruta: "img/deadpool.jpg",
    },
    {
      id: 3,
      titulo: "Spiderman: No Way Home",
      descripcion:
        "Después de que su identidad es revelada al mundo, Peter Parker debe lidiar con las consecuencias y busca la ayuda de Doctor Strange para restaurar su vida, lo que desata peligros multiversales.",
      ruta: "img/spiderman.jpg",
    },
  ],
};

const peliculas = datapeliculas.peliculas;

const botones = document.querySelector(".botones");

const ventana = document.getElementById("ventana-pelicula");
const contenedorPelicula = document.querySelector(".pelicula");
const btnCerrarVentana = document.getElementById("cerrar-ventana");
botones.addEventListener("click", (e) => {
  if (e.target.closest("button")) {
    const objetivo = e.target.closest("button");

    const peliculaSeleccionada = peliculas.find((pelicula) => {
      if (parseInt(objetivo.dataset.peliculaId) === pelicula.id) {
        return pelicula;
      }
    });

    const plantilla = `
        <img
          src="${peliculaSeleccionada.ruta}"
          alt="poster de pelicula"
          class="pelicula__img"
        />

        <div class="pelicula__info">
          <h1 class="pelicula__titulo">${peliculaSeleccionada.titulo}</h1>
          <p class="pelicula__descripcion">
            ${peliculaSeleccionada.descripcion}
          </p>
        </div>
      `;

    contenedorPelicula.innerHTML = plantilla;
    ventana.classList.add("ventana--active");
  }
});

btnCerrarVentana.addEventListener("click", (e) => {
  if (e.target.closest("button")) {
    ventana.classList.remove("ventana--active");
  }
});
