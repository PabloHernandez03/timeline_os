import { useEffect, useState, TouchEvent } from "react";
import example from "/img/orden.png";
import fondo_titulo from "/img/fondo_titulo.svg";

interface Opinion {
    name: string;
    opinion: string;
}

export default function DashBoardView() {
    const opiniones: Opinion[] = [
        { name: "Juan Pérez", opinion: "Excelente calidad y servicio. Muy satisfecho con mi compra." },
        { name: "Ana Gómez", opinion: "Los tenis llegaron a tiempo y son muy cómodos. Recomendado." },
        { name: "Carlos Ruiz", opinion: "Gran variedad de modelos y precios accesibles. Volveré a comprar." },
        { name: "María López", opinion: "El diseño es increíble y la calidad insuperable. Muy feliz con mi compra." },
        { name: "Luis Fernández", opinion: "Servicio al cliente excepcional y productos de alta calidad." },
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Movimiento automático
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Cambiar cada 5 segundos
        return () => clearInterval(interval);
    }, [currentIndex]);

    // Función para ir a la siguiente diapositiva
    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % opiniones.length);
    };

    // Función para ir a la diapositiva anterior
    const prevSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + opiniones.length) % opiniones.length);
    };

    // Manejo de deslizamiento táctil
    let touchStartX: number = 0;
    let touchEndX: number = 0;

    const handleTouchStart = (e: TouchEvent<HTMLDivElement>): void => {
        touchStartX = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent<HTMLDivElement>): void => {
        touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) nextSlide();
        if (touchStartX - touchEndX < -50) prevSlide();
    };

    return (
        <>
            {/* Hero Section */}
            <div className="text-[#F7F6F6] py-8 px-4">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-5xl font-bold mb-6">La mejor calidad, al mejor precio</h1>
                        <p className="text-lg mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus repellat nostrum at
                            culpa, voluptatem veniam adipisci fugiat magni libero facere.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            className="w-2/3 rounded-xl shadow-xl"
                            src="logo_principal.avif"
                            alt="Logo Principal"
                        />
                    </div>
                </div>
            </div>

            <div className="text-center">
                <h2 className="py-6 pt-2 inline-block text-4xl font-bold mb-10 text-[#F7F6F6]" style={{
                    backgroundImage: `url(${fondo_titulo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }} >Ordenes realizadas</h2>

                <div className="flex flex-wrap justify-center gap-12">
                    <img src={example} alt="s" className="w-1/3 md:w-1/4 lg:w-1/5" />
                    <img src={example} alt="s" className="w-1/3 md:w-1/4 lg:w-1/5" />
                    <img src={example} alt="s" className="w-1/3 md:w-1/4 lg:w-1/5" />
                    <img src={example} alt="s" className="w-1/3 md:w-1/4 lg:w-1/5" />
                    <img src={example} alt="s" className="w-1/3 md:w-1/4 lg:w-1/5" />
                    <img src={example} alt="s" className="w-1/3 md:w-1/4 lg:w-1/5" />

                </div>
            </div>

            {/* Carrusel de Opiniones */}
            <div className="container mx-auto py-16 px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold inline-block mb-10 text-[#F7F6F6]"style={{
                    backgroundImage: `url(${fondo_titulo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}>Opiniones de Clientes</h2>

                <div
                    className="relative overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {opiniones.map((review, index) => (
                            <div
                                key={index}
                                className="min-w-full p-6 bg-[#050404] flex flex-col items-center rounded-3xl shadow-lg"
                            >
                                <h3 className="text-xl font-semibold text-[#F7F6F6]">{review.name}</h3>
                                <p className="mt-4 text-center text-[#F7F6F6]">{review.opinion}</p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Indicadores */}
                <div className="p-4 flex justify-center items-center mt-6 space-x-4">

                    <button
                        className="transform bg-[#F7F6F6] text-[#050404] p-2 rounded-full shadow-lg hover:bg-[#F7F6F6]"
                        onClick={prevSlide}
                    >
                        &#8249;
                    </button>
                    
                    {opiniones.map((_, index) => (
                        <span
                            key={index}
                            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                                index === currentIndex
                                    ? "bg-black scale-125"
                                    : "bg-gray-300 hover:bg-gray-400"
                            }`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                    {/* Botones de Navegación */}
                
                    <button
                        className="transform bg-[#F7F6F6] text-[#050404] p-2 rounded-full shadow-lg hover:bg-[#F7F6F6]"
                        onClick={nextSlide}
                    >
                        &#8250;
                    </button>
                </div>
            </div>
        </>
    );
}
