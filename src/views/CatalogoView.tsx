import { useState, useEffect } from "react";
import fondo_titulo from "/img/fondo_titulo.svg";

interface Catalogo {
  name: string;
  image: string;
  description: string;
}

export default function CatalogoView() {
  const catalogo: Catalogo[] = [
    { name: "Jordan 1", image: "/img/catalogo/tenis_01.webp", description: "Tenis Jordan 1" },
    { name: "Jordan 2", image: "/img/catalogo/tenis_02.webp", description: "Tenis Jordan 2" },
    { name: "Jordan 3", image: "/img/catalogo/tenis_03.webp", description: "Tenis Jordan 3" },
    { name: "Jordan 4", image: "/img/catalogo/tenis_04.webp", description: "Tenis Jordan 4" },
    { name: "Jordan 5", image: "/img/catalogo/tenis_05.webp", description: "Tenis Jordan 5" },
    { name: "Jordan 6", image: "/img/catalogo/tenis_06.webp", description: "Tenis Jordan 6" },
    { name: "Jordan 7", image: "/img/catalogo/tenis_07.webp", description: "Tenis Jordan 7" },
    { name: "Jordan 7", image: "/img/catalogo/tenis_08.webp", description: "Tenis Jordan 7" },
    { name: "Jordan 8", image: "/img/catalogo/tenis_09.webp", description: "Tenis Jordan 8" },
    { name: "Jordan 8", image: "/img/catalogo/tenis_10.webp", description: "Tenis Jordan 8" },
    { name: "Jordan 8", image: "/img/catalogo/tenis_11.webp", description: "Tenis Jordan 8" },
    { name: "Jordan 8", image: "/img/catalogo/tenis_12.webp", description: "Tenis Jordan 8" },
    { name: "Jordan 8", image: "/img/catalogo/tenis_13.webp", description: "Tenis Jordan 8" },
    { name: "Jordan 8", image: "/img/catalogo/tenis_14.webp", description: "Tenis Jordan 8" },
    { name: "Jordan 8", image: "/img/catalogo/tenis_15.webp", description: "Tenis Jordan 8" },
    { name: "Jordan 8", image: "/img/catalogo/tenis_16.webp", description: "Tenis Jordan 8" },
    { name: "Jordan 8", image: "/img/catalogo/tenis_17.webp", description: "Tenis Jordan 8" },
    { name: "Jordan 8", image: "/img/catalogo/tenis_18.webp", description: "Tenis Jordan 8" },
    { name: "Jordan 8", image: "/img/catalogo/tenis_19.webp", description: "Tenis Jordan 8" },
    { name: "Jordan 8", image: "/img/catalogo/tenis_20.webp", description: "Tenis Jordan 8" },
    { name: "Jordan 8", image: "/img/catalogo/tenis_21.webp", description: "Tenis Jordan 8" },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(4); // Items por página según la pantalla
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(catalogo.length / itemsPerPage);
  const currentItems = catalogo.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Detectar tamaño de la pantalla y ajustar items por página
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(6); // Pantallas pequeñas (móviles)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(10); // Pantallas medianas (tablets)
      } else {
        setItemsPerPage(20); // Pantallas grandes (desktop)
      }
    };

    updateItemsPerPage(); // Actualizar al cargar la página
    window.addEventListener("resize", updateItemsPerPage); // Escuchar cambios de tamaño

    return () => {
      window.removeEventListener("resize", updateItemsPerPage); // Limpiar evento
    };
  }, []);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="text-center text-[#F7F6F6] p-5">
      <h1
        className="text-4xl font-bold px-10 pb-2 inline-block"
        style={{
          backgroundImage: `url(${fondo_titulo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        Catálogo
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="bg-orange-700 text-white rounded-lg shadow-lg  text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover p-4 pb-0 rounded-t-lg bg-zinc-200"
            />
            <h2 className="text-xl font-bold mt-4">{item.name}</h2>
            <p className="text-sm mt-2 pb-4">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg text-white font-semibold ${
            currentPage === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-[#C73E41]"
          }`}
        >
          Anterior
        </button>
        <span className="text-white">
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg text-white font-semibold ${
            currentPage === totalPages
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-[#C73E41]"
          }`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
